import React from 'react'
import image from '../../media/cover7.jpg'
import './contact.scss'
import FormContact from './FormContact'

const Contact = () => {
    return (
        <div className='contact-container' >
            <img className='img-box' src={image} alt=''/>
            <div className='contact-box' id='contact'>
                <FormContact/>
                <div className='contact-information'>
                    <h3>Informacion</h3>
                    <p>Por completar</p>
                </div>
            </div>

        </div>

    )
}

export default Contact