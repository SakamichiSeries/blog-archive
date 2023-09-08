"use client"

import Image from 'next/image'
import { useState, useEffect } from 'react'




export default function Home() {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)
    const [currentIndex, setCurrentIndex] = useState(0)


    let setIndex = (x: number) => {
        console.log("currentIndex", x)
        setCurrentIndex(x)
    }

    useEffect(() => {
        fetch('/hayakawa_seira.json')
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setLoading(false)
            })
    }, [])

    if (isLoading) return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            Loading
        </main>
    )


    return (
        <main className="flex min-h-screen md:flex-row lg:flex-col items-center justify-between h-screen bg-purple-100 flex-wrap">
            {/* <div className='w-full h-24 p-9 bg-white font-semibold flex-grow flex-shrink basis-1'>
        Unofficial mirror of {data.member_name_romaji.toUpperCase()}'s blog
      </div> */}
            <div className='grid grid-cols-12 w-full h-full'>
                <div className="hidden md:block md:col-span-6 lg:col-span-4 overflow-auto h-full p-6 divide-y divide-gray-300">
                    {data.blog.map((blog, index) =>
                        <div className='p-1' key={index} onClick={() => setIndex(index)}>
                            <div className="hover:bg-white hover:cursor-pointer rounded-3xl">
                                <div className='p-3 pb-0'>{blog.title}</div>
                                <div className='p-3 pt-0 text-gray-600'>{blog.time}</div>
                            </div>

                            {/* <hr></hr> */}
                        </div>
                    )}
                </div>
                <div className="col-span-12 md:order-1 md:col-span-6 h-full overflow-auto p-6 bg-white">
                    <div>
                        <div className="font-semibold py-3 text-4xl text-purple-900">
                            {data.blog[currentIndex].title}
                        </div>
                        <div className='font-light pb-12 text-gray-600'>
                            {data.blog[currentIndex].time}
                        </div>

                    </div>
                    <div dangerouslySetInnerHTML={{ __html: data.blog[currentIndex].content }}>
                    </div>

                    <div className='pt-12'>

                        Original link: <a className="underline" href={data.blog[currentIndex].url}>{data.blog[currentIndex].url}</a>
                    </div>
                </div>

                <div className="hidden md:flex md:-order-1 md:col-span-6 lg:order-2 lg:col-span-2 p-9 flex-col h-screen overflow-y-auto">
                    <div className='min-h-fit p-1'>
                        {/* <Image alt={data.member_name} src={data.profile_pic} fill={true} style={{
                            objectFit: 'contain',
                        }}>

                        </Image> */}
                        <img alt={data.member_name} src={data.profile_pic} className='max-h-48'></img>
                    </div>
                    <div className='p-1 pt-3 font-semibold text-purple-900 text-2xl'>{data.member_name}</div>

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
                            This site is an unofficial mirror of {data.member_name_romaji.toUpperCase()}'s blog.
                        </span>

                    </div>
                </div>
            </div>




        </main>
    )
}
