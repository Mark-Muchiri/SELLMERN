import React from 'react'
import { Breadcrumb } from 'flowbite-react'
import { HiHome } from 'react-icons/hi'
import {Link} from 'react-router-dom'

function StoreBreadcrumbs() {
    return (
        <div>
            <Breadcrumb
                aria-label="Solid background breadcrumb example"
                className="bg-gray-50 py-3 px-5 dark:bg-gray-900"
            >
                <Breadcrumb.Item
                    icon={HiHome}
                >
                    <Link to="/welcome">Home</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <Link to="/">Store</Link>
                </Breadcrumb.Item>
            </Breadcrumb>
        </div>
    )
}

export default StoreBreadcrumbs