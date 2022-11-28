import React from 'react'
import './about.scss'
import me from '../../media/myImage.png'
import { FaAddressBook, FaUserGraduate } from 'react-icons/fa'

const About = () => {
    return (
        <div className='about-container' id='about'>
            <div className='about-title'>
                <h1 className='title'>About<p className='title-p'> me</p></h1>
            </div>
            <div className='about-body'>
                <div className='about-description'>
                    <div className='myName'>
                        Buen día ! <span className='text__text'></span>
                    </div>
                    <div className='paragraph'>Soy Desarrollador Front-End, inicié en programación en la universidad, mi primer lenguaje fue Python, luego de recibir mi título de Ingeniería inicié un bootcamp de Desarrollo Web, el cual tiene como principal enfoque Javascript. Actualmente me encuentro completando un módulo de desarrollo Back-End.</div>
                    <div className='paragraph'>Soy una persona organizada, dedicada y creativa, me encuentro constantemente aprendiendo, estaré siempre dispuesto a afrontar nuevos retos y desarrollar nuevas habilidades.</div>
                    <div className='about-information'>
                        <div className='information-education'>
                            <h3 className='education-title'><FaUserGraduate/> Education</h3>
                            <div className='education'>
                                <li className='career'>Full-Stack Development and Computer Science</li>
                                <ol className='year'>2022 - currently</ol>
                                <ol className='institution'>Academlo</ol>
                            </div>
                            <div className='education'>
                                <li className='career'>Mining Engineering (Bachelor of Engineering) </li>
                                <ol className='year'>2016 - 2021</ol>
                                <ol className='institution'>Universidad de Santiago de Chile</ol>
                            </div>
                        </div>
                        <div className='information'>
                            <h3 className='myInformation-title'><FaAddressBook/> Information</h3>
                            <div className='myInformation'>
                                <p className='datum'><span>Age: </span>27</p>
                                <p className='datum'><span>Degree: </span>Bachelor</p>
                                <p className='datum'><span>Phone: </span>+569 7938 4744</p>
                                <p className='datum'><span>Location: </span>Santiago, Chile</p>
                                <p className='datum'><span>Mail: </span>carlos.salazar.me@usach.cl</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='about-img'>
                    <img className='me' src={me} alt=''/>
                </div>
            </div>
        </div>
    )
}

export default About