import React from 'react'
import './about.scss'
import me from '../../media/me.png'

const About = () => {
    return (
        <div className='about-container' id='about'>
            <div className='about-description'>
                <h3>Title about me</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut quod et obcaecati libero facere ipsa recusandae, consectetur officiis saepe! Sed ut perspiciatis blanditiis mollitia alias dolorum amet sunt eaque doloremque?</p>
            </div>
            <div className='about-img'>
                <img src={me} alt='about'/>
            </div>
        </div>
    )
}

export default About