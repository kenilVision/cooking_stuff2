import React from 'react'
import Slider from '../Component/Home/Slider'
import Features from '../Component/Home/Features'
import FreeRecepis from '../Component/Home/FreeRecipes'
import HealthyRecepies from '../Component/Home/HealthyRecepies'
import ReadOurPost from '../Component/Home/ReadOurPost'
import CheckoutRecentReview from '../Component/Home/CheckoutRecentReview'

function Home() {

  return (
    <div>
        <Slider/>
        <Features/>
        <FreeRecepis/>
        <HealthyRecepies/>
        <ReadOurPost />
        <CheckoutRecentReview />
    </div>
  )
}

export default Home
