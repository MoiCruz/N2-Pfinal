import React, { useEffect, useState } from 'react'
import { forecast } from '../../libs/axios/weather'

export default function FiveDays() {
  const [prediction, setPrediction] = useState([])
  useEffect(() => {
    forecast()
      .then((rs) => {
        const forecastData = rs.data.list || []
        setPrediction(forecastData)})
      .catch((error) =>
        console.log(error))

  }, [])
  return (
    <>
      <div className='flex flex-wrap gap-5 justify-start px-9'>
        {prediction && prediction.slice(0, 5).map((item, index) =>
          <ForecastFile
            key={item.dt}
            img={`weatherapp/weather/${item.weather[0].icon}.png`}
            index={index}
            date={item.dt_txt}
            temp={item.main.temp_min}
            temp2={item.main.temp_max}

          />
        )}

      </div>

    </>
  )
}
export function ForecastFile({ img, index, date, temp, temp2 }) {
  const day = new Date(date)
  day.setDate(day.getDate() + index)
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  const dayName = daysOfWeek[day.getDay()]

  return (
    <>
      <div className='flex flex-col justify-center items-center gap-2 py-5 bg-[#1E213A] h-38 w-29'>
        <h1 className='text-white size-25 text-center'>{index === 0 ? "Tomorrow" : dayName}</h1>
        <img src={img} alt="icons" className='w-16 h-14' />
        <div className='flex gap-2 justify-center'>
          <div className='flex'>
            <div className='text-white'>{temp}</div>
            <div className='text-white'>°c</div>
          </div>
          <div className='flex'>
            <div className='text-[#88869D]'>{temp2}</div>
            <div className='text-[#88869D]'>°c</div>
          </div>
        </div>
      </div>

    </>

  )
}

