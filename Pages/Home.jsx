import React, { Suspense, useEffect } from 'react'
import HeroSlider from '../Components/Home/HeroSlider'
import PopularServices from '../Components/Home/PopularServices'
import WinterCareTips from '../Components/Home/WinterCareTips'
import ExpertVets from '../Components/Home/ExpertVets'
import WinterRecipes from '../Components/Home/WinterRecipes'

const servicePromise = fetch('/services.json').then(res => res.json())
const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <HeroSlider />
      <Suspense fallback={<div>Loading...</div>}>
        <PopularServices servicePromise={servicePromise} />
      </Suspense>
      <WinterCareTips />
      <ExpertVets />
      <WinterRecipes />
    </div>
  )
}

export default Home