import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {AiOutlineProject} from 'react-icons/ai'
import {TbFileCertificate} from 'react-icons/tb'
import {AiOutlineMessage} from 'react-icons/ai'
import { useState } from 'react'

const Nav = () => {
  const[activeNav, setActiveNav ] = useState('#')
  return (
    <nav>
      <a href="#head" onClick={()=> setActiveNav('#head')} className={activeNav === '#head' ?  'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ?  'active' : ''}><AiOutlineUser /></a>
      <a href="#skills" onClick={()=> setActiveNav('#skills')} className={activeNav === '#skills' ?  'active' : ''}><TbFileCertificate /></a>
      <a href="#Certificate" onClick={()=> setActiveNav('#projects')} className={activeNav === '#projects' ?  'active' : ''}><AiOutlineProject /></a>
      <a href="#contacts" onClick={()=> setActiveNav('#contacts')} className={activeNav === '#contacts' ?  'active' : ''}><AiOutlineMessage /></a>
    </nav>
  )
}

export default Nav