import React from 'react'
import hoja from '../../media/hoja.png'
import './portfolio.scss'
import project1 from '../../media/portfolio/pokedex0.png'

const Portfolio = () => {
    return (
        <div className='portfolio-container' id='portfolio'>
            <div className='about-hoja'>
                <img className='hoja' src={hoja} alt=''/>
            </div>
            <h1 className='portfolio-title'>What I <p> Do</p></h1>
            <div className='projects'>
                <div className='portfolio-projects'>
                    <div className='project-container'>
                        <img src={project1} alt='' className='project-img pokedex'/>
                        <p className='project-description'>Description</p>
                    </div>
                    <div className='project-container'>
                        <img src={project1} alt='' className='project-img pokedex'/>
                        <p className='project-description'>Description</p>
                    </div>
                    <div className='project-container'>
                        <img src={project1} alt='' className='project-img pokedex'/>
                        <p className='project-description'>Description</p>
                    </div>
                    <div className='project-container'>
                        <img src={project1} alt='' className='project-img pokedex'/>
                        <p className='project-description'>Description</p>
                    </div>
                    <div className='project-container'>
                        <img src={project1} alt='' className='project-img pokedex'/>
                        <p className='project-description'>Description</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Portfolio