
import React from 'react'
import Image from 'next/image'
import details from '@/app/Contactus/contact'
import Link from 'next/link'

const page = () => {

    return (
        <div >
            <div className='absolute right-4 top-4'>
                <Link href='/dashboard' className='rounded-md bg-indigo-400 px-3.5 py-2.5 text-white font-semibold '>
                    
                        Home
                    
                </Link>
            </div>


            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our leadership</h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600">Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper suspendisse.</p>
                    </div>
                    <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                        {
                            details.map((data) => {
                                return <>
                                    <li>
                                        <div className="flex items-center gap-x-6">
                                            <Image height={50} width={50} className="h-16 w-16 rounded-full " src={data.img} alt="rishabh" />
                                            <div>
                                                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{data.name}</h3>
                                                <p className="text-sm font-semibold leading-6 text-indigo-600">{data.post}</p>
                                            </div>
                                        </div>
                                    </li>
                                </>

                            })
                        }


                    </ul>
                </div>
            </div>
        </div>
    )
}

export default page