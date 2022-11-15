import React from 'react'
import Slider from '../Slider/Slider'
import './portfolio.scss'

const Portfolio = () => {
    return (
        <div className='portfolio-container'>
            <h1 className='portfolio'>Portfolio</h1>
            <Slider/>
        </div>
    )
}

export default Portfolio