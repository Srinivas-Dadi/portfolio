import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Portfolio from './components/portfolio/Portfolio'
import Skills from './components/skills/Skills'
import Certificate from './components/certificate/Certificate'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

 
const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Skills />
      <Certificate />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  )
}

export default App