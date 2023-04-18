import React from 'react'
import BaseNavbar from '../../components/BaseComponents/BaseNavbar'
import BaseFooter from '../../components/BaseComponents/BaseFooter'
import AboutBreadcrumbs from './AboutBreadcrumbs'

function About() {
    return (
        <div>
            <BaseNavbar />
            <AboutBreadcrumbs />
            <h6>About</h6>
            <BaseFooter />
        </div>
    )
}

export default About