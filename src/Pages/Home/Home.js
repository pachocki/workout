import React from 'react'
import Hero from '../../Component/Hero/Hero'
import Programs from '../../Component/Programs/Programs'
import Reasons from '../../Component/Reasons/Reasons'
import Pricing from '../../Component/Pricing/Pricing'
import BmiCalc from '../../Component/bmi/BmiCalc'
import Testimonials from '../../Component/Testimonials/Testimonials'
const Home = () => {
  return (
    <div>
        <Hero/>
        <Programs/>
        <Reasons/>
        <Pricing/>
        <BmiCalc/>
        <Testimonials/>
      
    </div>
  )
}

export default Home