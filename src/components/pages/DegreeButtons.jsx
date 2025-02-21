import React from 'react'

export default function DegreeButtons() {
    return (
        <>
            <div className='flex gap-4 justify-end w-71 md:w-165'>
                <button className='flex items-center justify-center text-xl bg-white size-10 rounded-full font-extrabold'>°C</button>
                <button className='flex items-center justify-center text-xl bg-[#88869D] size-10 rounded-full text-white font-extrabold'>°F</button>
            </div>
        </>
    )
}
