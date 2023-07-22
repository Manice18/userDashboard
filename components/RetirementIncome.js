"use client";

import { rertirementIncome, retireData } from '@/constants/data'
import React, { useState, useEffect } from 'react'
import BarChart from './BarChart'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { MdArrowDropDown } from "react-icons/md"

const RetirementIncome = () => {
    const [percentage, setPercentage] = useState(0);
    const [percentageOne, setPercentageOne] = useState(0);
    const [percentageTwo, setPercentageTwo] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            if (percentage < 78) {
                setPercentage(percentage + 1);
            }
            if (percentageOne < 95) {
                setPercentageOne(percentageOne + 1);
            }
            if (percentageTwo < 59) {
                setPercentageTwo(percentageTwo + 1);
            }
        }, 30);
    }, [percentage, percentageOne, percentageTwo]);

    return (
        <div className='sm:col-span-3 lg:col-span-1 bg-white pt-10 flex flex-col sm:px-8 md:px-0 md:min-h-screen md:ml-20 lg:ml-0 lg:min-w-full'
        >
            <h2 className='text-[#6b5afc] font-bold font-custom1'>Retirement Income</h2>
            <h1 className='text-2xl font-custom1 font-semibold'>Starting Year 2056</h1>
            <ul className='grid md:grid-cols-3 gap-5 mt-14'>

                {/* rertirementIncome.map((value) => ( */}
                <li className='w-[80%] sm:col-span-3 md:col-span-1'>
                    <h1 className='font-bold text-3xl lg:text-2xl xl:text-3xl'>{rertirementIncome[0].money}</h1>
                    <p className='text-sm text-gray-400'>{rertirementIncome[0].des}</p>
                    <hr className='border-[#6b5afc] w-[90%] mt-2 border-2' />
                </li>
                <li className='w-[80%]'>
                    <h1 className='font-bold text-3xl lg:text-2xl xl:text-3xl'>{rertirementIncome[1].money}</h1>
                    <p className='text-sm text-gray-400'>{rertirementIncome[1].des}</p>
                    <hr className='border-[#6b5afc] w-[90%] mt-2 border-2' />
                </li>
                <li className='w-[80%] lg:w-[120%] xl:w-[80%]'>
                    <h1 className='font-bold text-3xl lg:text-2xl xl:text-3xl'>{rertirementIncome[2].money}</h1>
                    <p className='text-sm text-gray-400'>{rertirementIncome[2].des}</p>
                    <hr className='border-[#6b5afc] w-[90%] mt-2 border-2' />
                </li>
                {/* )) */}

            </ul>
            <h1 className='font-semibold font-custom1 mt-16 text-gray-800 tracking-wide'>Contributions Overtime</h1>
            <div>
                <BarChart />
            </div>
            <h1 className='font-semibold font-custom1 mt-7 tracking-wide text-gray-800'>How do I compare to my peers?</h1>
            <p className='text-sm text-gray-400 font-semibold'>These numbers represent current goal achievement</p>
            <div className='w-[100%] h-[20%] flex sm:flex-col  md:flex-row lg:flex-col xl:flex-row  mt-10 sm:space-y-6'>
                <div className='flex md:flex-col md:w-[60%] sm:w-full text-sm'>
                    <ul className='space-y-5 sm:w-full'>
                        {
                            retireData.map((value) => (
                                <div key={value.id}>
                                    <li className='flex items-center'>
                                        <p className='font-bold text-gray-700 mr-5'>{value.title}</p>
                                        <p className='font-medium'>{value.des}</p>
                                        <MdArrowDropDown />
                                    </li>
                                    <hr className='border-[1px] mt-1' />
                                </div>
                            ))
                        }
                    </ul>
                </div>
                <div className='h-[50%] w-[70%] lg:w-[90%] space-x-10 mx-auto flex font-bold'>
                    <CircularProgressbar value={percentage} text={`${percentage}%`} styles={buildStyles({
                        pathColor: `#24d4ac`,
                        textColor: '#000',
                        trailColor: '#d6d6d6',
                        backgroundColor: '#3e98',
                    })} />
                    <CircularProgressbar value={percentageOne} text={`${percentageOne}%`} styles={buildStyles({
                        pathColor: `#24d4ac`,
                        textColor: '#000',
                        trailColor: '#d6d6d6',
                        backgroundColor: '#3e98',
                    })} />
                    <CircularProgressbar value={percentageTwo} text={`${percentageTwo}%`} styles={buildStyles({
                        pathColor: `#24d4ac`,
                        textColor: '#000',
                        trailColor: '#d6d6d6',
                        backgroundColor: '#3e98',
                    })} />
                </div>
            </div>
        </div>
    )
}

export default RetirementIncome