import React, { useEffect, useState } from 'react'
import './footer.scss'
import image from '../../media/footerCover.png'

const Footer = () => {

    return (
        <div className='footer' id='footer'>
            <img src={image}/>
            <div className='footer-info'>
                <h1>Andrés Salazar Melita</h1>
                <p>Hello Nohelia 🍀</p>
            </div>
            <div className='footer-contact'>
                <h3>Contact me</h3>
                <p>And let's get down to work</p>
            </div>
            <div className='footer-sns'>
                <div className='design-by'>
                    Design by Andrés Salazar
                </div>
                <div className='sns-links'>
                    <a href='https://www.linkedin.com/in/andresmelita/' target="_blank" rel='noreferrer'>
                        <i className='fab fa-linkedin linkedin'></i>
                    </a>
                    <a href='https://github.com/Andresmelita' target="_blank" rel='noreferrer'> 
                        <i className='fab fa-github github'></i>
                    </a>
                    <a href='https://www.instagram.com/andresmelita/' target="_blank" rel='noreferrer'>
                        <i className='fab fa-instagram instagram'></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer