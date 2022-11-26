import React from 'react'
import hoja from '../../media/hoja.png'
import './portfolio.scss'
import project1 from '../../media/portfolio/pokedex0.png'
import project2 from '../../media/portfolio/weatherapp0.png'
import project3 from '../../media/portfolio/rickandmorty0.png'
import project4 from '../../media/portfolio/quotebox0.png'
import project5 from '../../media/portfolio/ecommerce0.png'

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
                        <img src={project2} alt='' className='project-img pokedex'/>
                        <p className='project-description'>Description</p>
                    </div>
                    <div className='project-container'>
                        <img src={project3} alt='' className='project-img pokedex'/>
                        <p className='project-description'>Description</p>
                    </div>
                    <div className='project-container'>
                        <img src={project4} alt='' className='project-img pokedex'/>
                        <p className='project-description'>Description</p>
                    </div>
                    <div className='project-container'>
                        <img src={project5} alt='' className='project-img pokedex'/>
                        <p className='project-description'>Description</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Portfolio