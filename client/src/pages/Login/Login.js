import React from 'react'
import LoginCard from './LoginCard'
import BaseNavbar from '../../components/BaseComponents/BaseNavbar'
import { Flowbite } from 'flowbite-react'

function Login() {
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
                <LoginCard />
            </div>
        </Flowbite>
    )
}

export default Login