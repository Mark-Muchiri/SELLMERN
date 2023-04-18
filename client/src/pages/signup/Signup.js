import React from 'react'
import SignupCard from './SignupCard'
import BaseNavbar from '../../components/BaseComponents/BaseNavbar'
import { Flowbite } from 'flowbite-react'

function Signup() {
   return (
      <Flowbite
         theme={{
            theme: {
               alert: {
                  color: {
                     primary: 'bg-prim--location=globalary'
                  }
               }
            }
         }}
      >
         <div>
            <BaseNavbar />
            <SignupCard />
         </div>
      </Flowbite>
   )
}

export default Signup