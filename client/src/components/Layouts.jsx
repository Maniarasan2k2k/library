import React from 'react'
import Navbar from "./Navbar"
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const Layouts = () => {
  return (
    <div className='min-h-screen flex flex-col bg-gray-50 text-gray-900'>
      <Navbar />
      

      <main className='flex-grow max-w-6xl w-full mx-auto px-4f py-8'>
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default Layouts