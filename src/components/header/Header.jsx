import React from 'react'
import './header.css'
import Bten from './Bten'
import my from '../../img-pdf/my.jpg'
import HeaderSocials from './HeaderSocials'
import {BsArrowRight} from 'react-icons/bs'

const Header = () => {
  return (
    <header>
      <div className="container header__container" id="head" >
        <h5>Hello I am </h5>
        <h1>SRINIVAS DADI</h1>
        <h5 className="text-light">Front-End Developer | Python Programmer</h5>
        <Bten />
        <HeaderSocials />
        <div className="me">
          <img src={my}  alt="my" class="center" />
        </div>

        <a href="#skills" className='scroll__down'>MY Skills <BsArrowRight/></a>
      </div>
    </header>
  )
}

export default Header