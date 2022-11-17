import React, { useEffect, useState } from 'react'
import About from '../About/About'
import Cover from '../Cover/Cover'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import Portfolio from '../Portfolio/Portfolio'
import Skills from '../Skills/Skills'
import './home.scss'

const Home = () => {
    
    const [scrollHeight, setScrollHeight] = useState(0)

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollHeight(position)
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
    }, [scrollHeight])

    return (
        <div>
            <Navbar scrollHeight={scrollHeight}/>
            <Cover/>
            <About/>
            <Portfolio/>
            <Skills/>
            <Footer/>
        </div>
    )
}

export default Home