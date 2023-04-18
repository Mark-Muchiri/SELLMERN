import React from 'react'
import BaseFooter from '../../components/BaseComponents/BaseFooter'
import BaseNavbar from '../../components/BaseComponents/BaseNavbar'
import CartContent from './CartContent'
import CartBreadcrumbs from './CartBreadcrumbs'

function Cart() {
    return (
        <div>
            <BaseNavbar />
            <CartBreadcrumbs />
            <CartContent />
            <BaseFooter />
        </div>
    )
}

export default Cart