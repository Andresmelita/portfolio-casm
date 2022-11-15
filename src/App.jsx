import React, { useEffect, useState } from 'react'
import './App.css'
import About from './components/About/About'
import Cover from './components/Cover/Cover'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Portfolio from './components/Portfolio/Portfolio'
import Skills from './components/Skills/Skills'
import Slider from './components/Slider/Slider'

function App() {

  const [scrollHeight, setScrollHeight] = useState(0)

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollHeight(position)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
  }, [scrollHeight])
  

  return (
    <div className="App">
      <Navbar scrollHeight={scrollHeight}/>
      <Cover/>
      <About/>
      <Portfolio>
      </Portfolio>
      <Skills/>
      <Footer/>
    </div>
  )
}

export default App
