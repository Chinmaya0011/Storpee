import React from 'react';
import '../Styles/footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import logo from '../Images/logo.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container my-footer">
                <div className="footer-info">
                    <img src={logo} alt="StorePee Logo" />
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
                        <li><a href="#"><FaFacebookF /></a></li>
                        <li><a href="#"><FaTwitter /></a></li>
                        <li><a href="#"><FaInstagram /></a></li>
                        <li><a href="#"><FaLinkedin /></a></li>
                        <li><a href="#"><FaWhatsapp /></a></li>
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
