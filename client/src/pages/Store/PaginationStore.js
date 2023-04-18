import React from 'react'
import onPageChange from 'react'
import { Pagination } from 'flowbite-react'

function PaginationStore() {
    return (
        <div>
            <Pagination
                currentPage={1}
                totalPages={100}
                onPageChange={onPageChange}
            />
        </div>
    )
}

export default PaginationStore