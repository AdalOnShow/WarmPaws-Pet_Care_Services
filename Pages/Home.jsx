import React, { Suspense } from 'react'
import HeroSlider from '../Components/Home/HeroSlider'
import PopularServices from '../Components/Home/PopularServices'
import WinterCareTips from '../Components/Home/WinterCareTips'
import ExpertVets from '../Components/Home/ExpertVets'

const servicePromise = fetch('/services.json').then(res => res.json())
const Home = () => {
  return (
    <div>
      <HeroSlider />
      <Suspense fallback={<div>Loading...</div>}> 
        <PopularServices servicePromise={servicePromise} />
      </Suspense>
      <WinterCareTips />
      <ExpertVets />
    </div>
  )
}

export default Home