import { transactions } from '@/constants/data'
import Image from 'next/image'
import React from 'react'
import { MdArrowDropDown } from "react-icons/md"
import { TfiBell } from 'react-icons/tfi'

const UserInfo = () => {
    return (
        <div className=
            'md:ml-10 lg:ml-20 sm:col-span-3  lg:col-span-1 min-h-screen lg:w-[70%] space-y-[55px] sm:bg-white pt-10 sm:min-w-full md:min-w-0 md:bg-[#f3f4f6e2]'
        >
            <div className='flex md:w-[70%] relative sm:w-[90%] mx-auto'>
                <div className="w-[80px] h-[80px]">
                    <Image
                        src="/user.png"
                        alt="er"
                        height={90}
                        width={90}
                        className="xl:w-[90px] xl:h-[90px] sm:h-[90px] lg:w-[75px] lg:h-[75px]  mx-auto rounded-full xl:-mt-2 absolute"
                    /></div>
                <div className='flex flex-col ml-[30px]'>
                    <h1 className='sm:text-[40px] md:text-4xl font-custom1 font-semibold'>Hi Mike,</h1>
                    <p className='text-slate-500'>welcome back</p>

                </div>
                <div className='md:hidden absolute flex right-0'>
                    <TfiBell size={20} fill='gray' className='cursor-pointer hover:scale-110 ' />
                    <div className='rounded-[50%] bg-blue-500 w-[6px] h-[6px]' />
                </div>
            </div>
            <div className='flex flex-col gap-6 md:w-[70%] sm:w-[80%] mx-auto sm:bg-gray-100 sm:px-10 sm:py-10 md:p-0 md:bg-inherit rounded-xl'>

                <div className='flex flex-col'>
                    <h2 className='text-black text-lg font-custom1 font-bold'>Today</h2>
                    <h1 className='md:text-[30px] sm:text-[50px] font-bold'>$19,892</h1>
                    <p className='text-slate-500 text-sm mt-1'>Account Balance</p>
                </div>
                <div className='sm:flex md:flex-col md:gap-6 sm:justify-between md:text-base sm:text-xl'>
                    <div>
                        <h1 className='font-semibold'>$4,000</h1>
                        <p className='text-slate-500 text-sm mt-1'>Year-to-Date Contributions</p>
                    </div>
                    <div>
                        <h1 className='font-bold'>$1,892</h1>
                        <p className='text-slate-500 text-sm mt-1'>Total Interest</p>
                    </div>
                </div>
                <button className='bg-[#3921ec] hover:bg-[#14037f] flex w-[150px] h-[45px] rounded-lg text-white justify-center items-center mt-3'>
                    <p>I want to</p>
                    <MdArrowDropDown size={25} />
                </button>
            </div>
            <div className='flex flex-col md:w-[70%] sm:w-[90%] mx-auto'>
                <h1 className='text-lg mb-10 font-medium mt-10'>Recent Transactions</h1>
                <ul className='space-y-5'>
                    {
                        transactions.map((value) => (
                            <li key={value.id}>
                                <h1 className='text-sm text-gray-500 tracking-wider'>{value.date}</h1>
                                <p className='tracking-tight text-[0.9rem] font-medium mb-5'>{value.des}</p>
                                <hr />
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div >
    )
}

export default UserInfo