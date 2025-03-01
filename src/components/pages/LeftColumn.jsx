import React, { useContext, useState } from 'react'
import { Modal } from './Modal';
import { WeatherContext } from '../../context/WeatherProvider';


export function LeftColumn() {
    const { todayweather, setgeo } = useContext(WeatherContext)
    const [openSearch, setOpenSearch] = useState(false)

    const openModal = () => { setOpenSearch(true) }
    const closeModal = () => { setOpenSearch(false) }

    function success(position) {
        setgeo({ lat: position.coords.latitude, lon: position.coords.longitude })
    }

    function error() {
        alert("Sorry, no position available.")
    }

    const options = {
        enableHighAccuracy: true,
        maximumAge: 30000,
        timeout: 27000,
    }
    const updateGeo = () => navigator.geolocation.watchPosition(success, error, options)


    return (
        <>
            {!openSearch && (
                <div className=' bg-[#1E213A] flex flex-col w-full h-168 md:h-full md:w-2/7'>
                    <div className='flex justify-between gap-7 px-8 md:px-17 pt-7 '>
                        <button className='bg-[#6E707A] text-white w-48 h-9 cursor-pointer text-center' onClick={openModal}>Search for Places</button>
                        <button className='bg-[#ffffff33] flex size-10 rounded-full cursor-pointer justify-center items-center'
                            onClick={updateGeo}>
                            <img src="../weatherapp/location.svg" alt="" className='size-6' />
                        </button>
                    </div>
                    {todayweather && todayweather.name && (
                        <CurrentWeather
                            key={todayweather.dt}
                            img={`../weatherapp/weather/${todayweather.weather[0].icon}.png`}
                            date={new Date(todayweather.dt * 1000)}
                            description={todayweather.weather[0].description}
                            temp={todayweather.main.temp}
                            city={todayweather.name}
                           
                        />
                    )}
                </div>
            )}
            {openSearch && <Modal closeModal={closeModal} />}
        </>
    )
}
function CurrentWeather({ img, date, description, temp, city }) {
    const { conversion } = useContext(WeatherContext)

    const celsius = (temp - 273.15).toFixed(0)
    const fahrenheit = ((temp - 273.15) * 9 / 5 + 32).toFixed(0)

    const realDate = date.toLocaleDateString()

    return (
        <>
            <div className='text-white relative flex justify-center items-center w-full h-53 md:h-80 overflow-x-hidden'>
                <div className='h-full w-full'>
                    <img src="../weatherapp/others/Cloud-background.png" alt="" className=' opacity-10 h-50 md:h-80 md:w-135 object-cover w-100' />
                </div>
                <img src={img} alt="" className='absolute w-2/5 mb-6' />
            </div>
            <div className='text-white flex flex-col items-center h-92'>
                
                {conversion ? (
                    <div className='flex items-center pt-12 md:pt-20'>
                        <div className='text-white text-8xl font-semibold'>{celsius}</div>
                        <div className='text-[#A09FB1] text-6xl'>°C</div>
                    </div>
                ) : (
                    <div className='flex items-center pt-12 md:pt-20'>
                        <div className='text-white text-8xl font-semibold'>{fahrenheit}</div>
                        <div className='text-[#A09FB1] text-6xl'>°f</div>
                    </div>
                )
                }
                <h2 className='text-[#A09FB1] text-3xl font-semibold my-9 md:my-15'>{description}</h2>
                <p className='text-[#88869D] text-sm'>Today &nbsp;&nbsp; . &nbsp;&nbsp; {realDate}</p>
                <div className='text-[#88869D] flex gap-2 text-sm mt-7 md:mt-12'>
                    <img src="../weatherapp/location_on.svg" alt="" className='size-5' />{city}</div>
            </div>

        </>

    )
}


