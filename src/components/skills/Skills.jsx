import React from 'react'
import './skills.css'
import {TiHtml5} from 'react-icons/ti'
import {FaCss3Alt} from 'react-icons/fa'
import {DiReact} from 'react-icons/di'
import {SiBootstrap} from 'react-icons/si'
import {SiJava} from 'react-icons/si'
import {SiPython} from 'react-icons/si'
import {CgCPlusPlus} from 'react-icons/cg'  

const Skills = () => {
  return (
    <section id="skills">
      <h5>skills I know</h5>
      <h2>My Experience</h2>
      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Front End Development</h3>
           <div className="experience_content">
            <article className='experience_details'>
              <TiHtml5 className='lg'/>
               <h4>HTML</h4>
            </article>
            <article className='experience_details'>
              <FaCss3Alt className='lg'/>
               <h4>CSS</h4>
            </article>
            <article className='experience_details'>
              <DiReact className='lg'/>
               <h4>React</h4>
            </article>
            <article className='experience_details'>
              <SiBootstrap className='lg'/>
               <h4>Bootstrap</h4>
            </article>
           </div>
        </div>
        <div className="experience_backend">
          <h3>Coding Languages</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <CgCPlusPlus className='lg'/>
               <h4>C</h4>
            </article>
            <article className='experience_details'>
              <CgCPlusPlus className='lg'/>
               <h4>C ++</h4>
            </article>
            <article className='experience_details'>
              <SiPython className='lg'/>
               <h4>Python</h4>
            </article>
            <article className='experience_details'>
              <SiJava className='lg'/>
               <h4>java</h4>
            </article>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Skills