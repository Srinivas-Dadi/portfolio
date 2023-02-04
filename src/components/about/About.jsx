import React from 'react'
import './about.css'
import Mr from '../../img-pdf/mr.JPG'
import {SiGeeksforgeeks} from 'react-icons/si'
import {SiCodechef} from 'react-icons/si'
import {CgWebsite} from 'react-icons/cg'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>ABOUT ME</h2>
  
       <div className="container about__container">
         <div className="about__me">
           <img src={Mr} alt="" srcset=""  />
         </div>
         <div className="about__content">
            <div className="about_cards">
              <article className='about_card'>
                 <SiGeeksforgeeks className='about_icon' />
                 <h5>Student Chapter</h5>
                 <p>MEvent Lead OF GFG</p>
              </article>
              <article className='about_card'>
                <CgWebsite className='about_icon' />
                 <h5>developer/Coder</h5>
                 <p>Front End Developer and 2 Star coder in codechef</p>
              </article>
              <article className='about_card'>
                 <SiCodechef className='about_icon' />
                 <h5>Code Chef Certified</h5>
                 <p>Qualified Code Chefs CCDSA Exam </p>
              </article>
            </div>

          <p className='abt_p'>
            Hello, I am SRINIVAS . Currently persuing my B.Tech Degree in Computer Science Engineering. I am a Front End Developer and a Compitative Programmer.
          </p>

          <a href="#contacts" className='btn btn-primary'>Let's work together</a>

         </div>
       </div>

    </section>
  )
}

export default About