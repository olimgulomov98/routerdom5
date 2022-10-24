import React from 'react'
import MainBanner from '../assets/images/Main Banner.png'

export const Home = () => {
  return (
    <div style={{textAlign: 'center'}}>
        <h1>Home</h1>
        <img src={MainBanner} alt="MainBanner" />
    </div>
  )
}
