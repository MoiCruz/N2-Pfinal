import React, { useEffect, useState } from 'react'
import { current } from '../../libs/axios/weather';

export function ReportToday() {
   const [todayweather, setTodayWeather] = useState(null)

   useEffect(() => {
    current()
      .then((result) => setTodayWeather(result.data))
      .catch((error) => console.log(error));
  }, [])

  if (!todayweather){
    return null
  }

  const windSpeed = todayweather.wind.speed || 0
  const windDeg = todayweather.wind.deg || 0
  const humidity = todayweather.main.humidity || 0
  const visibility = todayweather.visibility || 0
  const pressure = todayweather.main.pressure || 0


  return (
    <>
    <div>
    <div className='flex md:w-165 '>
            <h1 className='text-2xl font-extrabold text-white md:ps-0 ps-4 mt-15'>Today's Hightlights</h1>
            </div>
          </div>
          <div className='flex flex-col md:flex-row gap-6 items-center '>
            <div className='flex flex-col justify-center items-center text-white bg-[#1E213A] h-48 w-80'>
              <p className=''>Wind status</p>
              <div className='flex my-4 items-center'>
                <div className='text-6xl font-extrabold'>{windSpeed}</div>
                <div className='text-4xl'>ms</div>
              </div>
              <div className='flex justify-center items-center gap-3'>
                <div className='bg-[#88869D] size-8 rounded-full flex justify-center items-center'>
                  <img src="../weatherapp/navigation.svg" alt="" className='size-4' />
                </div>
                <p>N</p>
              </div>

            </div>
            <div className='flex flex-col justify-center items-center text-white bg-[#1E213A] h-48 w-80'>
              <p className='text-md'>Humidity</p>
              <div className='flex my-4'>
                <div className='text-6xl font-extrabold'>{humidity}</div>
                <div className='text-4xl'>%</div>
              </div>
              <div className='flex flex-col w-[70%]'>
                <div className='flex gap-23 w-full'>
                  <p className='text-xs'>0</p>
                  <p className='text-xs'>50</p>
                  <p className='text-xs'>100</p>
                </div>
                <div className='bg-white flex justify-start w-full h-2 rounded-xl'>
                  <div className='flex bg-amber-300 h-2 w-[85%] rounded-xl'></div>
                </div>
                <div className='flex w-full text-ms justify-end'>%</div>
              </div>

            </div>
          </div>
          <div className='flex flex-col md:flex-row gap-6 items-center justify-center'>
            <div className='flex flex-col text-white bg-[#1E213A] h-39 w-80 justify-center items-center gap-6'>
              <p className=''>Visibility</p>
              <div className='flex items-center'>
                <div className='text-6xl font-extrabold'>{visibility}</div>
                <div className='text-4xl'>km</div>
              </div>

            </div>
            <div className='flex flex-col text-white bg-[#1E213A] h-39 w-80 justify-center items-center gap-6'>
              <p className=''>Air Pressure</p>
              <div className='flex items-center'>
                <div className='text-6xl font-extrabold'>{pressure}</div>
                <div className='text-4xl'>mb</div>
              </div>

            </div>
          </div>
          
    
    
    
    </>


  )
}
export default ReportToday
