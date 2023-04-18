import React from 'react'
import BaseNavbar from '../../components/BaseComponents/BaseNavbar'
import CheckoutBreadcrumbs from './CheckoutBreadcrumbs'
import CheckoutForm from './CheckoutForm'

function Checkout() {
    return (
        <div>
            <BaseNavbar />
            <CheckoutBreadcrumbs />
            <CheckoutForm />
        </div>
    )
}

export default Checkout