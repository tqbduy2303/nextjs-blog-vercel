'use client'
import { Blog } from "@/utils/types";
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import NewItem from "./NewItem"




export function LastesNews({ lists }: { lists: Blog[] }){
    const [imageIndex, setImageIndex] = useState(0);
    return(
        <div className="flex">
            {/* <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-[#111111] dark:border-gray-700">
                <Link href="#">
                    <img className="rounded-t-lg" src={imageUrls[0]} alt="" />
                </Link>
                <div className="p-5">
                    <Link href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-black dark:text-white">Noteworthy technology acquisitions 2021</h5>
                    </Link>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    <Link href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </Link>
                </div>
            </div>
            <div>
                <Link href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-[#111111] dark:hover:bg-gray-700">
                    
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-black dark:text-white">Noteworthy technology acquisitions 2021</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    </div>
                    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={imageUrls[1]} alt=""/>
                </Link>
                <Link href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-[#111111] dark:hover:bg-gray-700">
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-black dark:text-white">Noteworthy technology acquisitions 2021</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    </div>
                    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={imageUrls[1]} alt=""/>
                </Link>
                <Link href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-[#111111] dark:hover:bg-gray-700">
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-black dark:text-white">Noteworthy technology acquisitions 2021</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    </div>
                    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={imageUrls[1]} alt=""/>
                </Link>
            </div> */}

            <div className="px-5 lg:px-16 pt-12 lg:pb-28 pb-16">
                <div className="font-babas-neue lg:text-heading text-3xl lg:leading-heading leading-heading-mobile text-center">
                    BLOGS
                </div>
                <div className="lg:flex lg:flex-row mt-14">
                    <div className="flex-1 lg:mr-10 mt-12 lg:mt-0 p-4 lg:p-0">
                    <div>
                        <Link href="">
                        <div
                            className="h-0 relative w-full"
                            style={{ paddingTop: "56%" }}
                        >
                            <img
                            alt=""
                            loading="lazy"
                            decoding="async"
                            data-nimg="fill"
                            className="object-cover"
                            sizes="100vh"
                            style={{
                                position: "absolute",
                                height: "100%",
                                width: "100%",
                                inset: "0px",
                                color: "transparent",
                            }}
                            />
                        </div>
                        </Link>

                        <div className="font-manrope lg:text-xl text-base mt-4 text-secondary">
                        Remittance
                        </div>
                        <Link href="">
                        <div className="font-manrope lg:text-xl text-base my-4 text-xl lg:text-2xl font-medium overflow-hidden text-ellipsis">
                            Ho Chi Minh Citys New Plan to Manage Remittance Flows -
                            Opportunities for Remittance to Vietnam
                        </div>
                        </Link>
                        <Link href="">
                        <div
                            className="font-manrope lg:text-xl text-base mb-4 overflow-hidden text-ellipsis text-primary-05"
                            style={{
                            WebkitLineClamp: 2,
                            display: "-webkit-box",
                            WebkitBoxOrient: "vertical",
                            }}
                        >
                            Recently, Ho Chi Minh City has proposed a plan to better manage
                            or nắn dòng redirect remittance flows. This initiative could
                            present new opportunities for enhancing the efficiency and
                            impact of remittance to Vietnam.
                        </div>
                        </Link>
                        <div className="flex flex-row">
                        <div className="flex-1">
                            <div className="font-manrope lg:text-xl text-base text-primary-04 text-base">
                            Thu Aug 29 2024
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>

                    {/* Similar adjustments for other sections */}
                    <div className="flex-1 flex flex-col">
                    {/* Repeat similar structure for other blog items */}
                    {/* Example blog item */}
                            <NewItem/>
                            <NewItem/>
                            <NewItem/>
                    {/* Add remaining sections as needed */}
                    </div>
                </div>
            </div>
        </div>
       
    )
}