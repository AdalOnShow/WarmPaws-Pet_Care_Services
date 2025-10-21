import React from 'react'
import Navbar from '../Components/Navbar'

const Error = () => {
  return (
    <div>
      <Navbar />

      <div className="w-full h-screen flex-center flex-col text-7xl">
        <h2 className="font-bold">404</h2>
        <p>Not Found</p>
      </div>
    </div>

  )
}

export default Error