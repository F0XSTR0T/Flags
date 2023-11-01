import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation">
            <ul>
                <li>
                    <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")} exact>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/country" className={(nav) => (nav.isActive ? "nav-active" : "")} exact>
                        Countries
                    </NavLink>  
                </li>
                <li>
                    <NavLink to="/blog" className={(nav) => (nav.isActive ? "nav-active" : "")} exact>
                        Blog
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")} exact>
                        About
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Navigation;