import React from 'react'
import BaseNavbar from '../../components/BaseComponents/BaseNavbar'
import BaseFooter from '../../components/BaseComponents/BaseFooter'
import ContactBreadcrumbs from './ContactBreadcrumbs'

function Contact() {
    return (
        <div>
            <BaseNavbar />
            <ContactBreadcrumbs />
            <h6>Contact</h6>
            <BaseFooter />
        </div>
    )
}

export default Contact