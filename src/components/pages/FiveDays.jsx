import React, { useContext } from 'react'
import { WeatherContext } from '../../context/WeatherProvider'


function dateFormat(epoc) {
  const date = new Date(epoc * 1000)
  const options = {
    weekday: "short",  
    day: "numeric",    
    month: "short"     
  };
  
  return date.toLocaleDateString("en-GB", options); 
}

export default function FiveDays() {
  const { prediction } = useContext(WeatherContext)



  return (
    <>

      <div className='flex flex-wrap gap-5 justify-start px-9'>
        {prediction && prediction.slice(1, 6).map((item, index) =>
          <ForecastFile
            key={item.dt}
            img={`weatherapp/weather/${item.weather[0].icon}.png`}
            index={index}
            date={dateFormat(item?.dt)}
            tempMin={item.main.temp_min}
            tempMax={item.main.temp_max}

          />
        )}

      </div>

    </>
  )
}

export function ForecastFile({ img, index, date, tempMin, tempMax }) {
  const { conversion } = useContext(WeatherContext)

  const day = new Date(date)
  day.setDate(day.getDate() + index)
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  const dayName = daysOfWeek[day.getDay()]


  const minCelsius = (tempMin - 273.15).toFixed(0)
  const maxCelsius = (tempMax - 273.15).toFixed(0)

  const minFahrenheit = ((tempMin - 273.15) * 9 / 5 + 32).toFixed(0)
  const maxFahrenheit = ((tempMax - 273.15) * 9 / 5 + 32).toFixed(0)

  return (
    <>

      <div className='flex flex-col justify-center items-center gap-2 py-5 bg-[#1E213A] h-38 w-29'>
        <h1 className='text-white size-25 text-center'>{index === 0 ? "Tomorrow" : dayName}</h1>
        <img src={img} alt="icons" className='w-16 h-14' />
        <div className='flex gap-2 justify-center'>

          {conversion ? (
            <>
              <div className='flex'>
                <div className='text-white'>{minCelsius}</div>
                <div className='text-white'>°c</div>
              </div>
              <div className='flex'>
                <div className='text-[#88869D]'>{maxCelsius}</div>
                <div className='text-[#88869D]'>°c</div>
              </div>
            </>
          ) : (
            <>
              <div className='flex'>
                <div className='text-white'>{minFahrenheit}</div>
                <div className='text-white'>°f</div>
              </div>

              <div className='flex'>
                <div className='text-[#88869D]'>{maxFahrenheit}</div>
                <div className='text-[#88869D]'>°f</div>
              </div>
            </>
          )}
        </div>
      </div>

    </>

  )
}

