import React from 'react'

// ELEMENTS
import BaseNavbar from '../../components/BaseComponents/BaseNavbar'
import BaseFooter from '../../components/BaseComponents/BaseFooter'
import StoreBreadcrumbs from './StoreBreadcrumbs'
import StoreCards from './StoreCards'

function Home() {
  return (
    <div>
      <BaseNavbar />
      <StoreBreadcrumbs />
      <StoreCards />
      <BaseFooter />
    </div>
  )
}

export default Home