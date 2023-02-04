import React from 'react'
import cv from '../../img-pdf/cv.docx'

const Bten = () => {
  return (
    <div className="cta">
        <a href={cv} download className='btn'>Resume</a>
        <a href="#contacts" className='btn-primary'>Contact Me</a>
    </div>
  )
}

export default Bten