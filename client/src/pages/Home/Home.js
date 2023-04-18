import React from 'react'

// ELEMENTS
import BaseNavbar from '../../components/BaseComponents/BaseNavbar'
import BaseFooter from '../../components/BaseComponents/BaseFooter'
import Advertisment from './Advertisment'
import Featured from './Featured'
import Featured2 from './Featured2'
import HomeBreadcrumb from './HomeBreadcrumb'


function Home() {
    return (
        <div>
            <BaseNavbar />
            <HomeBreadcrumb />
            <Advertisment />
            <Featured />
            <Featured2 />
            <Advertisment />
            <Featured />
            <Featured2 />
            <BaseFooter />
        </div>
    )
}

export default Home