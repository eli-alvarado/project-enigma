import React from 'react'
import {Link} from 'react-router-dom'

function NavigationMenu(props) {
    return (
        <div>
            <Link to="/" className="text-black py-3 border-t block" onClick={props.closeMenu}>
            <div className="font-bold py-3">A P P</div>
            </Link>
            <ul>
                <li>
                    <Link to="/" className="text-white py-3 border-t border-b block" onClick={props.closeMenu}>
                        H O M E
                    </Link>
                </li>
                <li>
                    <Link to="/about" className="text-white py-3 border-b block" onClick={props.closeMenu}>
                        A B O U T
                    </Link>
                </li>
                <li>
                    <Link to="/products" className="text-white py-3 border-b block" onClick={props.closeMenu}>
                        P R O D U C T S
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default NavigationMenu