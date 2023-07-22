"use client";

import React, { useState } from 'react'
import Link from 'next/link';
import { RiArrowDropRightLine } from "react-icons/ri"
import RangeSlider from './RangeSlider';

const RetirementStrategy = () => {

    return (
        <div className='sm:col-span-3 lg:col-span-1 bg-white md:ml-20 mb-20 md:min-w-min md:flex md:justify-center lg:inline-block'
        >
            <div className='bg-gray-100 mt-12 md:w-[50%] lg:w-[80%] sm:w-full px-6 py-8 md:rounded-xl sm:rounded-t-3xl'>
                <h1 className='font-custom1 font-semibold'>Retirement Startegy</h1>
                <div className='flex flex-col mt-7 text-neutral-800 text-[0.9rem] font-medium space-y-7 tracking-tight '>
                    <div className="flex flex-col">
                        <label
                            className="mb-2 inline-block "
                        >Employee Contribution</label>
                        <RangeSlider data={12} />
                    </div>
                    <div className="flex flex-col">
                        <label
                            className="mb-2 inline-block "
                        >Retirement Age</label>
                        <RangeSlider data={65} />
                    </div>
                    <hr />
                    <div className="flex justify-between">
                        <h1>Employer Contribution </h1>
                        <span>8.4%</span>
                    </div>
                    <div className="flex justify-between">
                        <h1>Interest Rate </h1>
                        <span>5%</span>
                    </div>
                    <button className='bg-[#3921ec] hover:bg-[#14037f] w-full h-[45px] rounded-lg text-white justify-center items-center mt-3 mx-auto sm:hidden md:flex'>
                        <p>Update</p>
                    </button>
                    <Link href="/" className='sm:hidden md:flex justify-center items-center text-[#6b5afc] font-bold'><p>View Help Docs</p> <RiArrowDropRightLine /></Link>
                    <div className='h-[11vh] lg:space-x-5 sm:hidden md:flex'>
                        <hr className='w-0.5 h-full bg-[#6b5afc]' />

                        <div className='flex flex-col lg:-space-y-1 xl:space-y-3 sm:space-y-3'>
                            <p>Are you considering a <br /><span className='font-bold'>Housing Advance?</span></p>

                            <p className='text-sm text-gray-500'>Limited time reduced interest</p>
                            <Link href="/" className='flex text-[#6b5afc] text-sm font-bold items-center'><p>Learn More </p> <RiArrowDropRightLine /></Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default RetirementStrategy