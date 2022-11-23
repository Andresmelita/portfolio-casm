import React from 'react'
import Slider from '../Slider/Slider'
import './portfolio.scss'

const Portfolio = () => {
    return (
        <div className='portfolio-container' id='portfolio'>
            <h1 className='portfolio-title'>What I <p> Do</p></h1>
            <div className='projects'>
                <div className='portfolio-projects'>
                    <Slider/>
                    <p className='project-description'>Description</p>
                </div>
                <div className='portfolio-projects'>
                    <Slider/>
                    <p className='project-description'>Description</p>
                </div>
            </div>

        </div>
    )
}

export default Portfolio