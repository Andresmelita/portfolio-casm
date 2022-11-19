import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../../media/logo02.png'
import './navbar.scss'

const Navbar = ({scrollHeight}) => {
    const toTheTop = () => {
        window.scrollTo({top: 0, left: 0, behavior: "smooth" })
    }

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)


    return (
        <div className='header'>
            <nav className='navbar'>
                <a className='navbar-logo'>
                    <img src={logo} alt='' className='logo' onClick={toTheTop}/>
                </a>
                <div className='hamburguer' onClick={handleClick}>
                    {click ? (<FaTimes size={25} style={{color: '#ffffff'}}/>)
                        : (<FaBars size={25} style={{color:'#ffffff'}}/>)}
                </div>
                <ul className={click ? 'nav-menu active': 'nav-menu'}>
                    <ol className='nav-item'>
                        <a href="#cover" onClick={closeMenu}>Home</a>
                    </ol>
                    <ol className='nav-item'>
                        <a href="#about" onClick={closeMenu}>About</a>
                    </ol>
                    <ol className='nav-item'>
                        <a href="#portfolio" onClick={closeMenu}>Portfolio</a>
                    </ol>
                    <ol className='nav-item'>
                        <a href="#skills" onClick={closeMenu}>Skills</a>
                    </ol>
                    <ol className='nav-item'>
                        <a href="#footer" onClick={closeMenu}>Contact</a>
                    </ol>
                </ul>
            </nav>
        </div>

    )
}

export default Navbar