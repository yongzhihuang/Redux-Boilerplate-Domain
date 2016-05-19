import React from 'react';
import {Link} from 'react-router';

const NavBar = React.createClass({
    render() {
        return (
            <nav className="top-bar" data-topbar="">
                <ul className="title-area">
                  <li className="name">
                    <h1>
                      <Link to="/">App</Link>
                    </h1>
                  </li>
                </ul>
            </nav>
        )
    }
});

export default NavBar;
