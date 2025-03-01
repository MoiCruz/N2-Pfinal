import React, { createContext, useState, useEffect } from 'react';
import { current, forecast, populations } from '../libs/axios/weather'


export const WeatherContext = createContext();

export function WeatherProvider({ children }) {
 const [todayweather, setTodayWeather] = useState()
 const [geo, setgeo] = useState({lat: 14.9 ,lon: -92.2667})
 const [prediction, setPrediction] = useState([])
 const [conversion, setConversion] = useState(true)
 const [searchCity, setSearchCity] = useState('')
 const [locationDetails, setLocationDetails] = useState(null)
 const [clickSearch, setClickSearch] = useState(false)


 
 useEffect(() => {
    if (clickSearch && searchCity) {
        populations(searchCity)
            .then(result => {
                if (result.data && result.data[0]) {
                    const { lat, lon } = result.data[0]; 
                    setgeo({ lat, lon });
                    setLocationDetails(result.data[0]); 
                } else {
                    setLocationDetails(null); 
                }
            })
            .catch((error) => {
                console.log(error);
                setLocationDetails(null);
            })
            .finally(() => {
                setClickSearch(false); 
            });
    }
}, [clickSearch, searchCity]);  


useEffect(() => {
    if (geo.lat && geo.lon) { 
        const fetchData = async () => {
            try {
               
                const currentWeather = await current(geo.lat, geo.lon);
                setTodayWeather(currentWeather.data); 

                
                const forecastData = await forecast(geo.lat, geo.lon);
                setPrediction(forecastData.data.list || []); 

            } catch (error) {
                console.log(error); 
            }
        };
        fetchData(); 
    }
}, [geo]);

   
        return (
                <WeatherContext.Provider value={{
                 todayweather,
                 setgeo,
                 prediction,
                 conversion,
                 setConversion,
                 searchCity,
                 setSearchCity,
                 locationDetails,
                 setClickSearch,
               
             }}>
                 {children}
             </WeatherContext.Provider>
        )
}


