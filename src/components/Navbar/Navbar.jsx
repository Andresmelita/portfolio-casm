import React from 'react'
import './navbar.scss'

const Navbar = ({scrollHeight}) => {
    return (
        <nav className={`navbar ${scrollHeight >20 ? "scrolling" : null}`}>
            <div className='navbar-logo'>ASM</div>
        </nav>
    )
}

export default Navbar