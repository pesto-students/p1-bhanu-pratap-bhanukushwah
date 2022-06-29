import {
    Routes,
    Route,
} from "react-router-dom";

import React from 'react'
import LandingPage from "../pages/LandingPage";
import ContactPage from "../pages/ContactPage";
import AboutPage from "../pages/AboutPage";
import PrivacyPolicyPage from "../pages/PrivacyPolicyPage";
import TermsConditionsPage from "../pages/TermsConditionsPage";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" index element={<LandingPage />} />
            <Route path="contact-us" element={<ContactPage />} />
            <Route path="about-us" element={<AboutPage />} />
            <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="terms-and-conditions" element={<TermsConditionsPage />} />
        </Routes>
    )
}

export default AppRoutes