"use client"

import { useState, useEffect } from 'react'
import { useRef } from 'react';



export default function Home() {
    const [data, setData] = useState<any>({})
    const [isLoading, setLoading] = useState(true)
    const [isNavOpen, setNavOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0)

    const blog_main = useRef<HTMLDivElement>(null);
    // https://stackabuse.com/bytes/fixing-the-useref-object-is-possibly-null-error-in-react/
    // https://stackoverflow.com/questions/55677600/typescript-how-to-pass-object-is-possibly-null-error
    const scrollBlogTop = () => {
        if (blog_main.current !== null) {
            // Now TypeScript knows that myRef.current is not null
            console.log(blog_main.current.scroll({ top: 0 }));
        }
    }

    const setIndex = (x: number) => {
        console.log("currentIndex", x)
        setCurrentIndex(x)
    }

    useEffect(() => {
        fetch('https://iamcristye.github.io/hayakawa-seira-blog-archive/result.json')
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setLoading(false)
            })
    }, [])

    if (isLoading || blog_main.current !== null) return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            Loading
        </main>
    )

    return (
        <main className="flex min-h-screen items-center justify-between h-screen w-screen bg-purple-100 flex-wrap">
            {/* <div className='w-full h-24 p-9 bg-white font-semibold flex-grow flex-shrink basis-1'>
        Unofficial mirror of {data.member_name_romaji.toUpperCase()}'s blog
      </div> */}

            <nav className={"max-lg:flex hidden h-0 bg-white w-full min-w-full max-w-full fixed top-0"}>
                {/* https://www.codementor.io/@giorgiasambrotta/hamburger-menu-with-react-and-tailwind-css-1qx6sruvua */}
                <div
                    className="menu-icon space-y-2 p-6 ml-auto mr-0 max-w-xs"
                    onClick={() => setNavOpen((prev) => !prev)} // toggle isNavOpen state on click
                >
                    <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                    <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                    <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                </div>
            </nav>
            <div className='flex flex-wrap flex-row w-full h-full'>
                <div className={(isNavOpen ? "basis-3/5" : "max-lg:hidden") + " flex flex-col lg:basis-1/3 overflow-auto h-full p-6 max-lg:p-1 divide-y divide-gray-300"}>
                    {data.blog.map((blog: any, index: number) =>
                        <div className='px-1 py-2' key={index} onClick={() => { setIndex(index); setNavOpen(false); scrollBlogTop(); }}>
                            <div className="hover:bg-white hover:cursor-pointer rounded-3xl">
                                <div className='p-3 pb-0'>{blog.title}</div>
                                <div className='p-3 pt-0 text-gray-600'>{blog.time}</div>
                            </div>

                            {/* <hr></hr> */}
                        </div>
                    )}
                </div>
                <div ref={blog_main} className={(isNavOpen ? "max-lg:hidden" : "") + " max-lg:basis-full max-lg:max-w-full lg:basis-1/2 h-full overflow-auto p-6 bg-white"}>
                    <div>
                        <div className="font-semibold py-3 max-lg:pt-12 text-4xl text-purple-900">
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

                <div className={(isNavOpen ? "basis-2/5" : "max-lg:hidden") + " lg:flex lg:basis-1/6 max-lg:pt-24 p-9 max-lg:p-4 flex-col h-screen overflow-y-auto"}>
                    <div className='min-h-fit p-1'>
                        {/* <Image alt={data.member_name} src={data.profile_pic} fill={true} style={{
                            objectFit: 'contain',
                        }}>

                        </Image> */}
                        <img alt={data.member_name} src={data.profile_pic} className='max-h-48'></img>
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

                    <div className='p-1 flex-1'>
                        <span className=''>
                            This site is an unofficial mirror of {data.member_name_romaji.toUpperCase()}&apos;s blog.
                        </span>

                    </div>
                </div>
            </div>




        </main>
    )
}
