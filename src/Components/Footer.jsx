import React from 'react';
import '../Styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-info">
                    <h3 className="footer-heading">StorePee</h3>
                    <p className="footer-description">Your one-stop shop for all your needs.</p>
                </div>
                <div className="footer-links">
                    <h4 className="footer-heading">Quick Links</h4>
                    <ul className="footer-list">
                        <li className="footer-list-item"><a href="/">Home</a></li>
                        <li className="footer-list-item"><a href="/products">Products</a></li>
                        <li className="footer-list-item"><a href="/about">About Us</a></li>
                        <li className="footer-list-item"><a href="/contact">Contact Us</a></li>
                    </ul>
                </div>
                <div className="footer-social">
                    <h4 className="footer-heading">Connect With Us</h4>
                    <ul className="footer-social-icons">
                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p className="footer-bottom-text">© 2024 StorePee. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
