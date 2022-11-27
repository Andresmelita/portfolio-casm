import React, { useEffect, useState } from 'react'
import './footer.scss'
import image from '../../media/footerCover.jpg'
import FormContact from '../Contact/FormContact'

const Footer = () => {

    return (
        <div className='footer' id='footer'>
            <img className='coverImg' src={image} alt=''/>
            <div className='Information'>
                <div className='footer-info'>
                    <h1>Andrés Salazar Melita</h1>
                    <p>Hello Nohelia </p>
                </div>
                <div className='footer-contact'>
                    <h3>
                        Contact me
                        <p>And let's get down to work</p>
                    </h3>
                </div>
                <div className='footer-sns'>
                    <div className='design-by'>
                        Design by Andrés Salazar 🍀
                    </div>
                </div>
                <div className='contactEmail'>
                    <FormContact/>
                </div>
            </div>

        </div>
    )
}

export default Footer