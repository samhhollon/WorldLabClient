import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

class Navbar extends Component {
    render() {
        return (
            <nav className="nav-wrapper teal lighten-2 navPadding">
                <span className="brand-logo">WorldLab</span>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <Link to="/">
                            World
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                            About
                        </Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default withRouter(Navbar)