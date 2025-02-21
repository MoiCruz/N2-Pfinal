import React from 'react'
import { useState, useEffect } from "react";
import { Modal } from './Modal';
import { current } from '../../libs/axios/weather';



export function LeftColumn() {
    const [openSearch, setOpenSearch] = useState(false)
            
    const openModal = () => { setOpenSearch(true) }
    const closeModal = () => { setOpenSearch(false) }

    useEffect(()=>{
        current()
        .then((rs) => console.log(rs))
        .catch((error) => console.log(error))
        console.log();
    },[])
            return(
                <>
            {!openSearch && (
                <div className='relative bg-[#1E213A] flex flex-col w-full h-168 md:h-full md:w-2/7'>
                    <div className='flex justify-between gap-7 px-8 md:px-17 pt-7 '>
                        <button className='bg-[#6E707A] text-white w-48 h-9 cursor-pointer text-center' onClick={openModal}>Search for Places</button>
                        <button className='bg-[#ffffff33] flex size-10 rounded-full cursor-pointer justify-center items-center'>
                            <img src="../weatherapp/location.svg" alt="" className='size-6' />
                        </button>
                    </div>
                    <div className='text-white relative flex justify-center items-center w-full h-53 md:h-80 overflow-x-hidden'>
                        <div className='h-full w-full'>
                            <img src="../weatherapp/others/Cloud-background.png" alt="" className=' opacity-10 h-50 md:h-80 md:w-135 object-cover w-100' />
                        </div>
                        <img src="../weatherapp/weather/03d.png" alt="" className='absolute w-2/5 mb-6' />
                    </div>
                    <div className='text-white flex flex-col items-center h-92'>
                        <div className='flex items-center pt-12 md:pt-20'>
                            <div className='text-white text-8xl font-semibold'>30</div>
                            <div className='text-[#A09FB1] text-6xl'>°C</div>
                        </div>
                        <h2 className='text-[#A09FB1] text-3xl font-semibold my-9 md:my-15'>Scattered Clouds</h2>
                        <p className='text-[#88869D] text-sm'>Today &nbsp;&nbsp; . &nbsp;&nbsp; Mon. 17 Feb</p>
                        <div className='text-[#88869D] flex gap-2 text-sm mt-7 md:mt-12'>
                            <img src="../public/weatherapp/location_on.svg" alt="" className='size-5' />Suchiate</div>
                    </div>
                </div>
            )}
            {openSearch && <Modal closeModal={closeModal} />}
            </>
        )
        }


