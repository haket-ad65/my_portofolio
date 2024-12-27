import React from "react";
import './my-css/header.css';
import logo from './images/AADI SPIDEY.png';

const NAV_LINKS = [
    { id: 1, name: 'Services', href: '#services' },
    { id: 2, name: 'About', href: '#about' },
    { id: 3, name: 'Work', href: '#work' },
    { id: 4, name: 'Contact', href: '#contact' },
];

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src={logo} alt="My Logo" />
            </div>
            <nav>
                <ul>
                    {NAV_LINKS.map(link => (
                        <li key={link.id}>
                            <a href={link.href}>{link.name}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
