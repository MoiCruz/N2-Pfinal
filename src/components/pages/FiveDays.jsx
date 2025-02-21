import React, { useEffect, useState } from 'react'
import { forecast } from '../../libs/axios/weather'

export default function FiveDays() {
  const [prediction, setPrediction] = useState([])
  useEffect(() => {
    forecast()
    .then((rs) => setPrediction(rs.data))
    .catch((error) =>
    console.log(error))

  },[])
  return (
    <>
          <div className='flex flex-wrap gap-5 justify-start px-9'>
            <div className='flex flex-col justify-center items-center gap-2 py-5 bg-[#1E213A] h-38 w-29'>
              <h1 className='text-white size-25 text-center'>tomorrow</h1>
              <img src="../weatherapp/weather/09d.png" alt="" className='w-16 h-14' />
              <div className='flex gap-2 justify-center'>
                <div className='text-white'>32°c</div>
                <div className='text-[#88869D]'>22°c</div>
              </div>
            </div>
            <div className='flex flex-col justify-center items-center gap-2 py-5 bg-[#1E213A] h-38 w-29'>
              <h1 className='text-white size-25 text-center'>Thu, 20 Feb</h1>
              <img src="/weatherapp/weather/09d.png" alt="" className='w-16 h-14' />
              <div className='flex gap-2 justify-center'>
                <div className='text-white'>32°c</div>
                <div className='text-[#88869D]'>22°c</div>
              </div>
            </div>
            <div className='flex flex-col justify-center items-center gap-2 py-5 bg-[#1E213A] h-38 w-29'>
              <h1 className='text-white size-25 text-center'>Fri, 21 Feb</h1>
              <img src="/weatherapp/weather/09d.png" alt="" className='w-16 h-14' />
              <div className='flex gap-2 justify-center'>
                <div className='text-white'>32°c</div>
                <div className='text-[#88869D]'>22°c</div>
              </div>
            </div>
            <div className='flex flex-col justify-center items-center gap-2 py-5 bg-[#1E213A] h-38 w-29'>
              <h1 className='text-white size-25 text-center'>Sat, 22 Feb</h1>
              <img src="/weatherapp/weather/09d.png" alt="" className='w-16 h-14' />
              <div className='flex gap-2 justify-center'>
                <div className='text-white'>32°c</div>
                <div className='text-[#88869D]'>22°c</div>
              </div>
            </div>
            <div className='flex flex-col justify-center items-center gap-2 py-5 bg-[#1E213A] h-38 w-29'>
              <h1 className='text-white size-25 text-center'>Sun, 23 Feb</h1>
              <img src="/weatherapp/weather/09d.png" alt="" className='w-16 h-14' />
              <div className='flex gap-2 justify-center'>
                <div className='text-white'>32°c</div>
                <div className='text-[#88869D]'>22°c</div>
              </div>
            </div>
          </div>
        
    </>
  )
}
