import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import About from './components/About/About'
import Cover from './components/Cover/Cover'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Portfolio from './components/Portfolio/Portfolio'
import Skills from './components/Skills/Skills'
import Slider from './components/Slider/Slider'

function App() {

  

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/skills' element={<Skills />}/>
        <Route path='/portfolio' element={<Portfolio />}/>
        <Route path='/contact' element={<Footer />}/>
      </Routes>
    </div>
  )
}

export default App
