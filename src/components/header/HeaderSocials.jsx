import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BiMailSend} from 'react-icons/bi'

const HeaderSocials = () => {
  return (
    <div className="header__Socials">
        <a href="https://www.linkedin.com/in/srinivas-dadi-27aug02/"><BsLinkedin /></a>
        <a href="https://github.com/Srinivas-Dadi"><BsGithub /></a>
        <a href="mailto:srivardhandadi@gmail.com" ><BiMailSend /></a>
    </div>
  )
}

export default HeaderSocials