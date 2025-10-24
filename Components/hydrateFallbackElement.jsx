import { RotateLoader } from 'react-spinners'

const HydrateFallbackElement = () => {
  return (
    <div>
      <div className="w-full h-[80vh] flex-center z-50">
        <RotateLoader />
      </div>
    </div>
  )
}

export default HydrateFallbackElement