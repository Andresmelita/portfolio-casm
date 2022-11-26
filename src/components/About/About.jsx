import React from 'react'
import './about.scss'
import me from '../../media/myImage.png'

const About = () => {
    return (
        <div className='about-container' id='about'>
            <div className='about-title'>
                <h1 className='title'>About<p className='title-p'> me</p></h1>
            </div>
            <div className='about-body'>
                <div className='about-description'>
                    <p>Hola! soy Desarrollador Front-End, inicié en programación en la universidad, mi primer lenguaje fue Python, luego de recibir mi título de Ingeniería inicié un bootcamp de Desarrollo Web, el cual tiene como principal enfoque Javascript. Actualmente me encuentro completando un módulo de desarrollo Back-End.</p>
                    <p>Soy una persona organizada, dedicada y creativa, me encuentro constantemente aprendiendo, estaré siempre dispuesto a afrontar nuevos retos y desarrollar nuevas habilidades.</p>
                </div>
                <div className='about-img'>
                    <img className='me' src={me} alt=''/>
                </div>
            </div>
        </div>
    )
}

export default About