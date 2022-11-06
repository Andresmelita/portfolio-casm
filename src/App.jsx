import React, { useEffect, useState } from 'react'
import './App.css'
import About from './components/About/About'
import Cover from './components/Cover/Cover'
import Navbar from './components/Navbar/Navbar'

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
    </div>
  )
}

export default App
