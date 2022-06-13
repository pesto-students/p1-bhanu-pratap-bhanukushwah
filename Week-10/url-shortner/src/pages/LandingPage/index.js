import React from 'react'
import { CreateShortLink, ShortLinkList } from '../../components/'

import './LandingPage.css'

const LandingPage = () => {
    return (
        <div className="container">
            <div className="hero-section container">
                <div className="hero-section-content">
                    <h1>
                        More than just shorter links!
                    </h1>
                    <p>
                        Build your brand's recognition and get detailed insights on how your links are performing.
                    </p>
                </div>

                <div className="hero-section-image">
                    <img src="/assets/hero.svg" alt="" />
                </div>
            </div>
            <CreateShortLink />
            <ShortLinkList />
        </div>
    )
}

export default LandingPage