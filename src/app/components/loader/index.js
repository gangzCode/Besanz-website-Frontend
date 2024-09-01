import React from 'react'
import './index.css'
const Loader = () => {
  return (
    <div className='loader'>
      <div>
        <img src={"/assets/images/logoIcon.svg"} alt="logo_icon" className='loader_icon' />
        <p className='loader_text'>Loading</p>
      </div>
    </div>
  )
}

export default Loader