import React from 'react'
import './portfolio.css'
import book from '../../certificate/pweb.png'
import shop from '../../certificate/shop.png'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Whats in my git</h5>
      <h5 className='blink'><a href="https://github.com/Srinivas-Dadi">Click Here</a></h5>
      <h2>Projects</h2>
       <div className="containe certify_container">
        <article className='certify_item'>
          <div className="certify_img">
            <img src={shop} alt="c-certify" width="100px" />
          </div>
          <h3><a href="https://srinivas-dadi.github.io/COLLEGE-PROJECTS/">Trade And Craft</a></h3>
          <h6>shopping website for traditional craft</h6>
        </article>
        <article className='certify_item'>
          <div className="certify_img">
            <img src={book} alt="c-certify" width="100px" />
          </div>
          <h3><a href="https://srinivas-dadi.github.io/photography-website-non-responsive-/">Photography</a></h3>
          <h6>A non responsive personal website to showcase my skill</h6>
        </article>
       </div>
       <h2><a href="https://github.com/Srinivas-Dadi">Other Projects</a></h2>
    </section>
  )
}

export default Portfolio