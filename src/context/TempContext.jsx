import React, { useState, useEffect, createContext } from 'react';
import { forecast } from '../libs/axios/weather';


export const TempContext = createContext();

export function TempProvider({ children }) {
  const [celcius, setCelcius] = useState(true);
  const [climate, setClimate] = useState([]);

  function degreeCelcius() {
    setCelcius(true);
  }

  function degreeFahrenheit() {
    setCelcius(false);
  }

  useEffect(() => {
    forecast()
      .then((rs) => {
        const forecastData = rs.data.list || [];
        setClimate(forecastData); // Guardamos los datos del pronóstico
      })
      .catch((error) => {
        console.error('Error al obtener los datos de la API:', error);
      });
  }, []);

  // Función que convierte de Kelvin a Celsius
  const kelvinToCelsius = (kelvin) => (kelvin - 273.15).toFixed(0);

  // Función que convierte de Celsius a Fahrenheit
  const celsiusToFahrenheit = (celsius) => ((celsius * 9) / 5 + 32).toFixed(0);

  return (
    <TempContext.Provider
      value={{
        celcius,
        setCelcius,
        degreeCelcius,
        degreeFahrenheit,
        climate, // Pasamos todo el clima para usarlo en otros componentes
        kelvinToCelsius,
        celsiusToFahrenheit,
      }}
    >
      {children}
    </TempContext.Provider>
  );
}






// import React, { useState, useEffect, createContext} from 'react'
// import { forecast } from '../libs/axios/weather'

// export const TempContext = createContext()

// export function TempProvider({children}){
// const [celcius, setCelcius] = useState(true)
// const [climate, setClimate] = useState([])

// function degreeCelcius() {
//     setCelcius(true) 
// }
// function degreeFahrenheit() {
//     setCelcius(false)
// }
// useEffect(() => {
//     forecast()
//     console.log(forecast)
//       .then((rs) => {
//         const forecastData = rs.data.list || []
//         setClimate(forecastData)})
//       .catch((error) =>
//         console.log(error))
//   }, []);

//   if (forecast?.main) {
//     const minCelsius = (forecast.main.temp_min - 273.15).toFixed(0);
//     const maxCelsius = (forecast.main.temp_max - 273.15).toFixed(0);
  
//     const minFahrenheit = ((forecast.main.temp_min - 273.15) * 9 / 5 + 32).toFixed(0);
//     const maxFahrenheit = ((forecast.main.temp_max - 273.15) * 9 / 5 + 32).toFixed(0);
  
//     const realDegreesCelcius = (forecast.main.temp - 273.15).toFixed(0);
//     const realDegreesFahrenheit = ((forecast.main.temp - 273.15) * 9 / 5 + 32).toFixed(0);
//   } else {
//     console.error('Datos de la temperatura no disponibles');
//   }
// return (
//     <TempContext.Provider value={{
//         celcius,
//         setCelcius,
//         degreeCelcius,
//         degreeFahrenheit,
//         minCelsius,
//         maxCelsius,
//         minFahrenheit,
//         maxFahrenheit,
//         realDegreesCelcius,
//         realDegreesFahrenheit
//         }}>
//         {children}
//     </TempContext.Provider>
// )
//     }