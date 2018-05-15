import Link from 'next/link'
import PropTypes from 'prop-types';

const Navbar = ({ isLoggedIn }) =>  (
    <nav>
        <div className="nav-wrapper teal lighten-2 navPadding">
            {/* Navbar brand */}
            <span className="brand-logo">WorldLab</span>
            {/* Links */}
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li className="navSpacing">
                    <Link prefetch href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li className="navSpacing">
                    <Link prefetch href="/public">
                        <a>Public</a>
                    </Link>
                </li>
                { isLoggedIn ?
                    ( <li><Link href="/secret"><a>Secret</a></Link></li> ) :
                    ( <li><Link href="/login"><a>Login</a></Link></li> )
                }
                { isLoggedIn ?
                    ( <li><Link href="/logout"><a>Logout</a></Link></li> )
                    : ( '' )
                }
            </ul>
        </div>
    </nav>
);

Navbar.propTypes = {
    isLoggedIn: PropTypes.bool
};

export default Navbar;