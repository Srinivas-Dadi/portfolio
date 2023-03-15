import React from 'react'
import './contact.css'
import {FiMail} from 'react-icons/fi'
import {ImWhatsapp} from 'react-icons/im'
import {BsLinkedin} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id="contacts"> 
      <h5>Ready To Colab</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <a href="mailto:srivardhandadi@gmail.com"><article class="contact_mode">
          <FiMail className='contact_icon'/>
          <p>Gmail</p>
        </article></a>
        <a href="https://wa.me/+917075347089?text=urlencodedtext"><article class="contact_mode">
          <ImWhatsapp className='contact_icon'/>
          <p>Whatsapp</p>
        </article></a>
        <a href="https://www.linkedin.com/in/srinivas-dadi-27aug02/"><article class="contact_mode">
          <BsLinkedin className='contact_icon'/>
          <p>LinkedIn</p>
        </article></a>
      </div>
    </section>
  )
}

export default Contact
