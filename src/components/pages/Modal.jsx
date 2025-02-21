import React from 'react'

export function Modal({closeModal}) {
    return (
        <>
    <div className='top-0 left-0 z-50 bg-[#1E213A] bg-amber flex flex-col w-95 md:w-2/7 h-168 md:h-full gap-3 p-5 md:px-12'>
        <span className='flex justify-end mb-2'>
            <img src="../weatherapp/close.svg" alt="close" onClick={closeModal} className='size-7 cursor-pointer' />
        </span>
        <div className='flex justify-between md:mt-6'>
            <div className='bg-transparent flex items-center border border-white'>
                <img src="../weatherapp/search.svg" alt="search" className='h-6 ms-2 cursor-pointer' />
                <input type="text" placeholder='search location' className='text-white p-2 h-9 w-50 bg-transparent border border-transparent outline-none' />
            </div>
            <button className='p-2 h-9 w-20 bg-blue-600 text-amber-100 font-bold cursor-pointer active:bg-blue-400 active:text-emerald-400'>Search</button>
        </div>
        <ul>
            <li className="flex justify-between w-[70%] h-14 pl-2 text-base font-medium cursor-pointer text-[#E7E7EB] hover:border border-[#616475] mt-6  hover:after:bg-arrow-bg hover:after:bg-contain hover:after:bg-no-repeat hover:after:p-2 hover:after:mt-5 hover:after:mr-5">
                <p className="flex items-center text-lg ml-2">Tapachula,MX</p>
            </li>
        </ul>
    </div>
</>
)
}
