import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../../media/logo03.png'
import './navbar.scss'

const Navbar = ({scrollHeight}) => {
    const toTheTop = () => {
        window.scrollTo({top: 0, left: 0, behavior: "smooth" })
    }

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => {
        setClick(false)

    }

    return (
        <header className='header'>
            <nav className='navbar'>
                <div className='navbar-logo'>
                    <p className='character'>&#123; &#125;</p>
                    <img src={logo} alt='' className='logo' onClick={toTheTop}/>
                </div>

                <div className='menu-item'>
                    <div className='hamburguer' onClick={handleClick}>
                        {click ? (<FaTimes className='x-item' size={28} style={{color: '#ffffff'}} onClick={closeMenu}/>)
                            : (<FaBars className='h-item' size={28} style={{color:'#ffffff'}}/>)}
                    </div>
                </div>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <ol className='nav-item'>
                        <a href="#home" onClick={closeMenu} className='item-title'>Inicio</a>
                    </ol>
                    <ol className='nav-item'>
                        <a href="#about" onClick={closeMenu} className='item-title'>Sobre mi</a>
                    </ol>
                    <ol className='nav-item'>
                        <a href="#portfolio" onClick={closeMenu} className='item-title'>Portafolio</a>
                    </ol>
                    <ol className='nav-item'>
                        <a href="#skills" onClick={closeMenu} className='item-title'>Tecnologías</a>
                    </ol>
                    <ol className='nav-item'>
                        <div className='contact'>
                            <a className='contact-a' href="#contact" onClick={closeMenu}>Contacto</a>
                        </div>
                    </ol>
                </ul>
            </nav>
        </header>

    )
}

export default Navbar