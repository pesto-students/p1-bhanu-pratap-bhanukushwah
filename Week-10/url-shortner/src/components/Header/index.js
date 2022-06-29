import React from 'react'

import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <header className="container">
            <nav className="nav">
                <div className="logo"><Link to="/">Shortly</Link></div>
                <ul className="nav-link-container">
                    <li className="nav-link"><Link to="/about-us">About Us</Link></li>
                    <li className="nav-link"><Link to="/contact-us">Contact Us</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header