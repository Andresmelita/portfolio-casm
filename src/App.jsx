import React, { useEffect, useState, Suspense, lazy } from 'react'
import About from './components/About/About'
import Cover from './components/Cover/Cover'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Portfolio from './components/Portfolio/Portfolio'
import Skills from './components/Skills/Skills'
import './App.css'
import Loading from './components/Loading/Loading'
import Contact from './components/Contact/Contact'
import FormContact from './components/Contact/FormContact'
import CoverFooter from './components/Cover/CoverFooter'

function App() {
  const [scrollHeight, setScrollHeight] = useState(0)
  const [loading, setLoading] = useState(false)

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
    }, 1660)
  },[])

  return (
    <div className='App'>
        {loading && <Loading />}
        <Navbar className='navbar-app'/>
        <Cover/>
        <About/>
        <Portfolio/>
        <Skills/>
        <Contact/>
        <CoverFooter/>
        <Footer/>
    </div>
  )
}

export default App
