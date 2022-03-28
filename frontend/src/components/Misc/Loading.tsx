import React from 'react'
import SpinnerAnimation from "../../assets/images/loader.svg"

export const Loading = () => {
  return (
    <div className='loading-container'>
        <img src={SpinnerAnimation} alt="Loading Animation"/>
    </div>
  )
}
