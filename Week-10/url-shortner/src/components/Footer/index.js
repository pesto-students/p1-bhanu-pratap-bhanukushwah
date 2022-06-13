import React from 'react'
import { Link } from 'react-router-dom'

import './Footer.css'

const Footer = () => {
    return (
        <footer className="container">
            <div className="footer-logo">
                <Link to="/">Shortly</Link>
                <p>Shortner to create perfect URLs for your links.</p>
            </div>

            <ul className="nav-links">
                <li><Link to="/about-us">About Us</Link></li>
                <li><Link to="/contact-us">Contact Us</Link></li>
            </ul>

            <ul className="nav-links">
                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                <li><Link to="/terms-and-conditions">Terms & Conditions</Link></li>
            </ul>
        </footer>
    )
}

export default Footer