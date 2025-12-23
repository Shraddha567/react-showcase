import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Assuming you might want to style the header

const Header = () => {
    return (
        <header className="header">
            <h1 className="header-title">React Showcase</h1>
            <nav className="header-nav">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/showcase">Showcase</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;