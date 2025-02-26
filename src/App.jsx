import './App.css'
import React from 'react'
import { LeftColumn } from './components/pages/LeftColumn'
import FiveDays from './components/pages/FiveDays'
import DegreeButtons from './components/pages/DegreeButtons'
import ReportToday from './components/pages/ReportToday'
// import { TempProvider } from './context/TempContext'





0

export default function App() {


  return (
    <>
      {/* <TempProvider> */}
      <div className='flex flex-col md:flex-row w-94 md:w-screen md:h-screen justify-end m-0 p-0'>
        <LeftColumn />
        <div className='bg-[#100E1D] flex flex-col md:items-center h-full w-full md:w-5/7 p-3 gap-5 pt-9'>
          {/* <DegreeButtons /> */}
          <FiveDays />
          <ReportToday />
          <div className='flex justify-center'>
            <h1 className='text-white text-sm'>Created by MoisesCruz</h1>
          </div>
        </div>
      </div>
      {/* </TempProvider> */}
    </>
  )
}
