import React, { useEffect, useState } from 'react'
import About from './components/About/About'
import Cover from './components/Cover/Cover'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Portfolio from './components/Portfolio/Portfolio'
import Skills from './components/Skills/Skills'
import './App.css'
import Contact from './components/Contact/Contact'
import Loading from './components/Loading/Loading'
import { ClimbingBoxLoader } from 'react-spinners'

function App() {
    
  const [scrollHeight, setScrollHeight] = useState(0)
  const [loading, setLoading] = useState(true)

  const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollHeight(position)
  }

  useEffect(() => {
      window.addEventListener("scroll", handleScroll)
  }, [scrollHeight])

  useEffect (()=>{
    setLoading(true)
    setTimeout(() => {
        setLoading(false)
    },2000)
  },[])

  return (
    <div className="App">
      <Navbar scrollHeight={scrollHeight}/>
      {loading ? (
          <ClimbingBoxLoader size={30} color={'#fff'} loading={loading}/>
        ) : (
          <div>
            <Cover/>
            <About/>
            <Portfolio/>
            <Skills/>
            <Contact/>
            <Footer/>
          </div>
        )
      }
    </div>
  )
}

export default App
