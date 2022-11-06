import React from 'react'
import './navbar.scss'

const Navbar = ({scrollHeight}) => {
    const toTheTop = () => {
        window.scrollTo({top: 0, left: 0, behavior: "smooth" })
    }

    return (
        <nav className={`navbar ${scrollHeight >20 ? "scrolling" : null}`}>
            <div className='navbar-logo' onClick={toTheTop}>ASM</div>
        </nav>
    )
}

export default Navbar