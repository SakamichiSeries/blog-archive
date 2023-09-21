"use client"

import { useState, useEffect } from 'react'
import { useRef } from 'react';



export default function Home() {
    const [data, setData] = useState<any>({})
    const [isLoading, setLoading] = useState(true)
    const [isNavOpen, setNavOpen] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0)

    const blog_main = useRef<HTMLDivElement>(null);
    // https://stackabuse.com/bytes/fixing-the-useref-object-is-possibly-null-error-in-react/
    // https://stackoverflow.com/questions/55677600/typescript-how-to-pass-object-is-possibly-null-error
    const scrollBlogTop = () => {
        if (blog_main.current !== null) {
            // Now TypeScript knows that myRef.current is not null
            blog_main.current.scroll({ top: 0 })
        }
    }

    // for #0, show contents on mobile and latest blog on desktop
    const updateHash = (x: string) => {
        // console.log("setHash", x)

        let hash: number

        if (isNaN(parseInt(x.replace("#", "")))                     // #abc
            || (parseInt(x.replace("#", "")) < 0)                   // #-4.6
            || (parseInt(x.replace("#", "")) > data.blog.length))   // #20110821
        {
            hash = 0           // show contents on mobile and latest blog on desktop
        }
        else {
            hash = parseInt(x.replace("#", ""))
        }

        if (hash == 0) {       // show contents on mobile and latest blog on desktop
            // console.log("show contents on mobile and latest blog on desktop")
            setNavOpen(true)
            document.title = `${data.member_name_kanji}ブログ`
            if (window.location.hash.replace("#", "") != "0") {
                window.location.hash = "0"
            }
        }
        else {
            let index: number
            index = data.blog.length - parseInt(x.replace("#", ""))
            setCurrentIndex(index)
            setNavOpen(false)
            document.title = `${data.blog[index].title} - ${data.member_name_kanji}ブログ`
            if (window.location.hash.replace("#", "") != (data.blog.length - index).toString()) {
                window.location.hash = (data.blog.length - index).toString()
            }
        }
    }

    const switchNav = () => {
        const x = window.location.hash

        if (isNaN(parseInt(x.replace("#", "")))                     // #abc
            || (parseInt(x.replace("#", "")) < 0)                   // #-4.6
            || (parseInt(x.replace("#", "")) > data.blog.length)    // #20110821
            || (parseInt(x.replace("#", "")) == 0))                 // nav currently open
        {
            updateHash((data.blog.length - currentIndex).toString())
        }
        else {
            updateHash("0")
        }
    }

    useEffect(() => {
        const member_name_romaji = window.location.pathname.split('/').filter(Boolean).pop()
        fetch(`/${member_name_romaji}-blog-archive/result.json`)
            .then((res) => res.json())
            .then((data) => {
                setData(data)
            })
    }, [])

    useEffect(() => {
        if (data.blog) {
            setLoading(false)
            // console.log(data.blog)
            updateHash(window.location.hash)

            // for handling back button
            window.addEventListener("hashchange", e => {
                updateHash(window.location.hash)
            });
        }
    }, [data])

    if (isLoading) return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            Loading
        </main>
    )

    return (
        <main className="flex items-center justify-between lg:min-h-screen lg:h-screen w-screen bg-purple-100 flex-wrap">
            {/* <div className='w-full h-24 p-9 bg-white font-semibold flex-grow flex-shrink basis-1'>
        Unofficial mirror of {data.member_name_romaji.toUpperCase()}'s blog
      </div> */}

            <nav className={"flex lg:hidden h-0 bg-white w-full min-w-full max-w-full fixed top-0"}>
                {/* https://www.codementor.io/@giorgiasambrotta/hamburger-menu-with-react-and-tailwind-css-1qx6sruvua */}
                <div
                    className="menu-icon space-y-1.5 p-6 ml-auto mr-0 max-w-xs"
                    onClick={() => { switchNav() }}
                >
                    <span className="block h-0.5 w-6 bg-gray-600"></span>
                    <span className="block h-0.5 w-6 bg-gray-600"></span>
                    <span className="block h-0.5 w-6 bg-gray-600"></span>
                </div>
            </nav>
            <div className='flex flex-wrap flex-row w-full lg:h-full'>
                <div className={(isNavOpen ? "basis-3/5" : "hidden") + " max-h-[90vh] lg:max-h-full lg:flex flex-col lg:basis-1/3 overflow-auto lg:h-full p-1 lg:p-6 divide-y divide-gray-300"}>
                    {data.blog.map((blog: any, index: number) =>
                        <div className='px-1 py-2' key={index} onClick={() => { updateHash((data.blog.length - index).toString()); scrollBlogTop(); }}>
                            <div className="hover:bg-white hover:cursor-pointer rounded-3xl">
                                <div className='p-2 pb-0'>{blog.title}</div>
                                <div className='p-2 pt-0 text-gray-600'>{blog.time}</div>
                            </div>

                            {/* <hr></hr> */}
                        </div>
                    )}
                </div>
                <div ref={blog_main} className={(isNavOpen ? "hidden" : "") + " lg:flex flex-col basis-full lg:max-w-full lg:basis-1/2 h-full overflow-auto p-8 bg-white"}>
                    <div>
                        <div className="font-semibold py-3 pt-12 lg:pt-2 text-4xl text-purple-900">
                            {data.blog[currentIndex].title}
                        </div>
                        <div className='font-light pb-12 text-gray-600'>
                            {data.blog[currentIndex].time}
                        </div>

                    </div>
                    <div dangerouslySetInnerHTML={{ __html: data.blog[currentIndex].content }}>
                    </div>

                    <div className='pt-12'>
                        <a className="underline" href={data.blog[currentIndex].url}>Original link</a>
                    </div>
                </div>

                <div className={(isNavOpen ? "basis-2/5" : "hidden") + " lg:flex lg:basis-1/6 pt-24 lg:pt-9 p-4 lg:p-9 flex-col overflow-y-auto"}>
                    <div className='min-h-fit p-1'>
                        {/* <Image alt={data.member_name} src={data.profile_pic} fill={true} style={{
                            objectFit: 'contain',
                        }}>

                        </Image> */}
                        <img alt={data.member_name_kanji} src={data.profile_pic} className='max-h-48'></img>
                    </div>
                    <div className='p-1 pt-3 font-semibold text-purple-900 text-2xl'>{data.member_name_kanji}</div>
                    {/* <div className='p-1'>
                        {data.member_name_kana}</div>
                    <div className='p-1'>
                        {data.member_name_romaji}</div> */}
                    <div className='p-1'>
                        {data.生年月日}</div>
                    <div className='p-1'>
                        {data.血液型}</div>
                    <div className='p-1'>
                        {data.星座}
                    </div>
                    <div className='p-1'>
                        {data.身長}</div>
                    <div className='p-1'>

                        <span>
                            {Object.keys(data.SNS).map((keyname) =>
                                <a key={keyname} href={data.SNS[keyname]}>
                                    {keyname}
                                </a>
                            )}
                        </span>


                    </div>

                    <br></br>
                    <br></br>

                    <div className='p-1 flex-1 text-xs'>
                        <span className=''>
                            This site is an unofficial mirror of {data.member_name_romaji.toUpperCase()}&apos;s blog.
                        </span>

                    </div>
                </div>
            </div>




        </main>
    )
}
