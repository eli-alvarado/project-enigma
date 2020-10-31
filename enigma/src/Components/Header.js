import React from 'react'
import Navigation from './Navigation'
import {Link} from 'react-router-dom'

function Header() {
    return (
        <header className="border-b p-3 flex justify-between items-center" style={{'background': '#5c748c'}}>
            <Link to="/" className="text-white py-3 block">
            <span className="font-bold text-white">
                A P P
            </span>
            </Link>

            <Navigation/>

        </header>
    )
}

export default Header