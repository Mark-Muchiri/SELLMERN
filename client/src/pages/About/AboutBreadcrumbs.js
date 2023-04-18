import React from 'react'
import { Breadcrumb } from 'flowbite-react'
import { HiHome } from 'react-icons/hi'

function AboutBreadcrumbs() {
    return (
        <div><Breadcrumb
            aria-label="Solid background breadcrumb example"
            className="bg-gray-50 py-3 px-5 dark:bg-gray-900"
        >
            <Breadcrumb.Item
                href="#"
                icon={HiHome}
            >
                Home
            </Breadcrumb.Item>
            <Breadcrumb.Item href="#">
                Store
            </Breadcrumb.Item>
        </Breadcrumb>
        </div>
    )
}

export default AboutBreadcrumbs