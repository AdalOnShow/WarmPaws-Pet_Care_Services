import React from 'react'
import { RotateLoader } from 'react-spinners'

const HydrateFallbackElement = () => {
  return (
    <div>
      <div className="fixed top-7 inset-0 flex items-center bg-white justify-center h-[80vh] z-50">
        <RotateLoader />
      </div>
    </div>
  )
}

export default HydrateFallbackElement