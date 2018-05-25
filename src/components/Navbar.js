import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

import { AUTH_TOKEN } from '../constants'

class Navbar extends Component {
    render() {
        const authToken = localStorage.getItem(AUTH_TOKEN)
        return (
            <nav className="nav-wrapper teal lighten-2 navPadding">
                <span className="brand-logo">WorldLab</span>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <Link to="/">World</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    {authToken ? (
                        <li>
                            <Link
                                to="/"
                                onClick={() => {localStorage.removeItem(AUTH_TOKEN)}}
                            >
                                Log out
                            </Link>
                        </li>
                    ) : (<li><Link to="/login">Log in</Link></li>)}
                </ul>
            </nav>
        )
    }
}

export default withRouter(Navbar)