import React from 'react'
import {Link} from 'react-router-dom'

function Nav() {
    return (
        <nav>
            <Link to="/">Home </Link>
            <Link to="/about">About </Link>
            <Link to="/user">User </Link>
        </nav>
    )
}

export default Nav