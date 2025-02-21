import './App.css'
import React from 'react'
import { LeftColumn } from './components/pages/LeftColumn'
import RigthColumn from './components/pages/RigthColumn'




export default function App() {
  return (
    <>
      <div className='flex flex-col md:flex-row w-94 md:w-screen md:h-screen justify-end m-0 p-0'>
          <LeftColumn />
          <RigthColumn />

      </div>
      

    </>
  )
}
