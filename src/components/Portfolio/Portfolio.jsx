import React from 'react'
import Slider from '../Slider/Slider'
import hoja from '../../media/hoja.png'
import './portfolio.scss'

const Portfolio = () => {
    return (
        <div className='portfolio-container' id='portfolio'>
            <div className='about-hoja'>
                <img className='hoja' src={hoja} alt=''/>
            </div>
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