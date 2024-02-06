import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from "react-feather"
import { Testimonialdata } from "../../Data/Testimonial.js"

export default function Testimonial() {
    const [curr, setCurr] = useState(0);

    const prev = () => {
        setCurr((curr) => (curr === 0 ? 0 : curr - 1));
    }
    const next = () => {
        setCurr((curr) => (curr === Testimonialdata.length - 1 ? 0 : curr + 1));
    }

    return (
        <div className='relative'>
            <div className='flex transition-transform ease-out duration-500 container px-5 mx-auto'>

                <div className="flex sm:-m-4 -mx-4 -mb-10 -mt-4">
                  
                    <div className="flex flex-col justify-center items-center p-4 sm:mb-0 mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#1EB6D6" className="inline-block w-8 h-8 text-gray-400 mb-8" viewBox="0 0 975.036 975.036">
                            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                        </svg>
                        <h2 className="text-xl font-medium title-font text-gray-900 -mt-2 px-6">{Testimonialdata[curr].review}</h2>
                        <p className="text-base leading-relaxed mt-2 font-medium">{Testimonialdata[curr].StudentName}</p>
                        <p className='font-medium'><span>{Testimonialdata[curr].StudentCourse}</span>, <span>{Testimonialdata[curr].StudentCollege}</span></p>
                    </div>

                </div>

            </div>

            <div className="inset-0 p-4">
                <button onClick={prev} className='absolute left-0 top-[50%] p-1 rounded-full shadow bg-precursor_theme_color/50 text-gray-800 hover:bg-precursor_theme_color/75'>
                    <ChevronLeft />
                </button>
                <button onClick={next} className='absolute right-0 top-[50%] p-1 rounded-full shadow bg-precursor_theme_color/50 text-gray-800 hover:bg-precursor_theme_color/75'>
                    <ChevronRight />
                </button>
            </div>

        </div>
    )
}