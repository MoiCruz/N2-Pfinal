import React, { useContext } from 'react'
import { WeatherContext } from '../../context/WeatherProvider'

export default function DegreeButtons() {
    const { setConversion } = useContext(WeatherContext)
  
function degreeCelcius() {
    setConversion(true)
   
}
function degreeFahrenheit() {
    setConversion(false)
  
}

    return (
        <>
            <div className='flex gap-4 justify-end w-71 md:w-165'>
                
                    <button
                    className='flex items-center justify-center text-xl bg-white size-10 rounded-full font-extrabold'
                    onClick={degreeCelcius}
                    >°C</button>
               
                    <button
                    className='flex items-center justify-center text-xl bg-[#88869D] size-10 rounded-full text-white font-extrabold'
                    onClick={degreeFahrenheit}>°F</button>
                
            </div>
        </>
    )
}
