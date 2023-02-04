import React from 'react'
import './certificate.css'
import C from '../../certificate/C.jpg'
import ccdsa from '../../certificate/ccdsa.jpg'
import python from '../../certificate/python.jpg'
// import book from '../../certificate/book.png'
// import shop from '../../certificate/shop.png'

const Certificate = () => {
  return (
    <section id="Certificate">
      <h5>What I am Certified with</h5>
      <h2>Certifications</h2>
       <div className="containe certificate_container">
        <article className='certificate_item'>
          <div className="certificate_img">
            <img src={ccdsa} alt="c-certify" width="100px" />
          </div>
          <h3>CCDSA</h3>
        </article>
        <article className='certificate_item'>
          <div className="certificate_img">
            <img src={python} alt="c-certify" width="100px" />
          </div>
          <h3>Python</h3>
        </article>
        <article className='certificate_item'>
          <div className="certificate_img">
            <img src={C} alt="c-certify" width="100px" />
          </div>
          <h3>C</h3>
        </article>
       </div>
    </section>
  )
}

export default Certificate