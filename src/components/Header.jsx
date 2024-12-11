import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/header.css';
import punetours from '../assets/punetours-logo.png';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleGoToCart = () => {
        navigate('/cart');
    };

    return (
        <header className="header">
            <button onClick={handleGoToCart} className="cart-button">Go to Cart</button> {/* Cart button */}
            <div className="logo">Pune Tours</div>
            <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#gallery">Gallery</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;