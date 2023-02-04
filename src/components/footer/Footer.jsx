import React from 'react'
import './footer.css'
//import {BiCopyright} from 'react-icons/bi'
// import {FaFacebookSquare} from 'react-icons/fa'
// import {BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#head" className='footer_logo'>SRINIVAS DADI</a>
      <ul className='plink'>
        <li><a href="#head" className="">Home</a></li>
        <li><a href="#about" className="">About</a></li>
        <li><a href="#skills" className="">My Experience</a></li>
        <li><a href="#Certificate" className="">Certification</a></li>
        <li><a href="#portfolio" className="">Projects</a></li>
        <li><a href="#contacts" className="">Contact Me</a></li>
      </ul>
    </footer>
  )
}

export default Footer