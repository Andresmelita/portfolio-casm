import React from 'react'
import coverImg from '../../media/cover6.jpg'

const Contact = () => {
    return (
        <div className='contact' id='contact'>
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
            </div>
        </div>

    )
}

export default Contact