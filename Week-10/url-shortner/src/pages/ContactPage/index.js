import React from 'react'

import './ContactPage.css'

const ContactPage = () => {
    return (
        <div className="container">
            <h1 className="container section-title">
                Contact Us
            </h1>

            <div className="container contact-section">
                <div className="contact-section-content">
                    <h3>
                        You can react us at
                    </h3>
                    <h2>
                        hello@shortly.com
                    </h2>
                </div>

                <div className="contact-section-image">
                    <img src="/assets/contact.svg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default ContactPage