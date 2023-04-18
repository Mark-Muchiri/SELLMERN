import React from 'react'
import 'flowbite'
import { Carousel, Flowbite } from 'flowbite-react'


function Advertisment() {
    return (
        <div>
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
                <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
                    <Carousel>
                        <img
                            src="https://images.unsplash.com/photo-1489171078254-c3365d6e359f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"
                            alt="..."
                        />
                        <img
                            src="https://images.unsplash.com/photo-1484101403633-562f891dc89a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80"
                            alt="..."
                        />
                        <img
                            src="https://images.unsplash.com/photo-1560067174-c5a3a8f37060?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
                            alt="..."
                        />
                        <img
                            src="https://images.unsplash.com/photo-1464288550599-43d5a73451b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=896&q=80"
                            alt="..."
                        />
                        <img
                            src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=780&q=80"
                            alt="..."
                        />
                    </Carousel>
                </div>
            </Flowbite>
        </div>
    )
}

export default Advertisment