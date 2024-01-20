import React from 'react'
import { Button } from 'react-bootstrap'
import './Banner.css'
function Banner() {
  return (
    <>
      <div className="banner position-relative ">
        <video width="100%" autoPlay loop muted className='position-relative'>
          <source src="2.mp4" type='video/mp4' width="100%" />
        </video>
        <div className=" text-center text-white position-absolute  start-0 w-100"style={{top:"25%"}}>
          <img src="logo192.png" alt="logo" width={130}  className='logorotate pb-3'/>
          <h1 className='text-white' >CNC WEB WORLD</h1>
          <h2 className='text-white'>Remove Your Fresher Tag</h2>
          <Button variant="primary" className='rounded me-3 px-4 fs-5 py-2 mt-4 rounded-pill'>Learn React</Button>
          <Button variant="success" className=' fs-5 mt-4  px-4 py-2 rounded-pill'>Learn Java</Button>
        </div>
      </div>

    </>
  )
}

export default Banner