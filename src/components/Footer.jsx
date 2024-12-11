import React from 'react';
import '../Styles/footer.css';
import punetours from '../assets/punetours-logo.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Pune Tours. All Rights Reserved.</p>
            </div>
            <div className="footer-sections">
                <div className="about-footer">
                    <h3 className="section-title">About Us</h3>
                    <img className="punetours-logo" src={punetours} alt="Pune Tours Logo" />
                    <p className="about-text">
                        Luxury Tours & Affordable Car Hire Services in Pune, Mumbai, and across India. Experience world-class travel and service.
                    </p>
                </div>
                <div className="contact-footer">
                    <h3 className="section-title">Contact Info</h3>
                    <p><i className="ri-smartphone-line"></i> +9359439807</p>
                    <p><i className="ri-mail-line"></i> info@pune-tours.com</p>
                    <p><i className="ri-map-pin-line"></i> Katraj, Pune 411046</p>
                    <p><i className="ri-time-line"></i> Sun-Sat: 9:00 AM - 2:00 PM</p>
                </div>
                <div className="footer-categories">
                    <h3 className="section-title">Categories</h3>
                    <ul className="footer-links">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#gallery">Gallery</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
            <div className="additional-info">
                <div>
                    <h3>Our Tours</h3>
                    <ul>
                        <li>Pune Darshan / Sightseeing Tour</li>
                        <li>Mumbai Darshan / Sightseeing</li>
                        <li>Ganapatipule Tour Booking</li>
                        <li>Ashtavinayak Tour Booking</li>
                        <li>Shirdi Tour Booking</li>
                        <li>Kerala Tour</li>
                        <li>Goa Tour</li>
                        <li>Lakshadweep Tour</li>
                        <li>Shimla Kullu Manali Tour</li>
                        <li>Andaman Tour</li>
                        <li>Kashmir Tour Package Booking</li>
                        <li>Kaas Pathar / Kaas Plateau Tour</li>
                    </ul>
                </div>
                <div>
                    <h3>Our Fleet</h3>
                    <ul>
                        <li>Hatchback Cars</li>
                        <li>Sedan Cars</li>
                        <li>SUV’s</li>
                        <li>Mini Buses</li>
                        <li>Buses</li>
                        <li>Luxury Cars</li>
                    </ul>
                </div>
                <div>
                    <h3>Services</h3>
                    <ul>
                        <li>Bus Hire Services in Pune</li>
                        <li>Airport travel pick and drop</li>
                        <li>Minibuses / Winger</li>
                        <li>Mumbai Pune travel</li>
                        <li>Private Bus Hire Services in Pune</li>
                        <li>13-Seater Tempo Traveller</li>
                        <li>Travel Destinations around Pune</li>
                    </ul>
                </div>
                <div>
                    <h3>Top Cars & Buses on Hire</h3>
                    <ul>
                        <li>Swift Dzire</li>
                        <li>Tata Indigo</li>
                        <li>Toyota Etios</li>
                        <li>Toyota Innova</li>
                        <li>Renault Lodgy</li>
                        <li>Mahindra XUV</li>
                        <li><span style={{  }}>Toyota Fortuner</span></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
