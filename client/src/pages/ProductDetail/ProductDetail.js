import React from 'react'
import ProductDetailMains from './ProductDetailMains'
import Rattings from './RattingsAndReviews/Rattings'
import BaseFooter from '../../components/BaseComponents/BaseFooter'
import BaseNavbar from '../../components/BaseComponents/BaseNavbar'
import Reviews from './RattingsAndReviews/Reviews'

function ProductDetail() {
    return (
        <div>
            <BaseNavbar />
            <ProductDetailMains />
            <Rattings />
            <Reviews />
            <BaseFooter />
        </div>
    )
}

export default ProductDetail