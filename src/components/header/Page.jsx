import React from 'react'
import { Link } from 'react-router-dom'

function Page({ name, icon, url }) {
    return (
        <Link to={url}>
            <span className='text-xl flex gap-[2px] items-center font-semibold cursor-pointer duration-100 ease-linear hover:text-yellow-500 max-lg:[1px] max-lg:text-[2.2vw]'>
                <p className='mb-[4px] max-lg:hidden text-yellow-500'>{icon}</p>
                <p>{name}</p>
            </span>
        </Link>
    )
}

export default Page
