import React from 'react'
import './navbar.scss'
import logo from '../../media/logo02.png'
import { NavLink } from 'react-router-dom'

const Navbar = ({scrollHeight}) => {
    const toTheTop = () => {
        window.scrollTo({top: 0, left: 0, behavior: "smooth" })
    }

    return (
        <nav className={`navbar ${scrollHeight >20 ? "scrolling" : null}`}>
            <img src={logo} alt='' className='navbar-logo' onClick={toTheTop}/>
            <ul className='header_list'>
                    <ol className='header_item'>
                        <NavLink className='header_link' to='/about'>
                            About me
                        </NavLink>
                    </ol>
                    <ol className='header_item'>
                        <NavLink className='header_link' to='/portfolio'>
                            Portfolio
                        </NavLink>
                    </ol>
                    <ol className='header_item'>
                        <NavLink className='header_link' to='/skills'>
                            Skills
                        </NavLink>
                    </ol>
                    <ol className='header_item'>
                        <NavLink className='header_link' to='/contact'>
                            Contact
                        </NavLink>
                    </ol>
                </ul>
        </nav>
    )
}

export default Navbar