import React, { useContext, useState } from 'react';
import '../Styles/header.css'; // Import the CSS file
import { MyContext } from '../Context/MyContext';
import { FaHome } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { FaSitemap } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { Link, Navigate } from 'react-router-dom';
import { IoIosLogOut } from "react-icons/io";
import { FaTruck } from "react-icons/fa";
import logo from '../images/logo.png';
import { auth } from '../Firebase/firebase';

function Header() {
  const [searchItem, setSearchItem] = useState('');
  const { searchProducts, setSearchResults} = useContext(MyContext); // Include isAuthenticated and signout in the destructuring

  const handleChange = (e) => {
    setSearchItem(e.target.value);
  };

    const handleSignout = async () => {
      try {
        await auth.signOut(); // Sign out using the auth object
        console.log('User signed out successfully');
        Navigate('/login')
      } catch (error) {
        console.error('Error signing out:', error.message);
      }
    };
  const handleClick = (e) => {
    e.preventDefault();
    const results = searchProducts(searchItem);
    setSearchResults(results);
    setSearchItem('');
  };

  return (
    <div className="header-container">
      {/* Logo */}
      <div className="logo">
        <img src={logo} alt="Storepee Logo" />
      </div>
      {/* Navigation */}
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link"><FaHome /></Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link"><FcAbout /></Link>
          </li>
          <li className="nav-item">
            <Link to="/products" className="nav-link"><FaSitemap /></Link>
          </li>
          <li className="nav-item">
            <Link to="/cart" className="nav-link"><FaCartPlus /></Link>
          </li>
          <li className="nav-item">
            <Link to="/success" className="nav-link"><FaTruck /></Link>
          </li>
          <li className="nav-item">
            <Link to={'/login'} onClick={handleSignout} className="nav-link-btn"><IoIosLogOut /></Link> {/* Signout button */}
          </li>
        </ul>
      </nav>
      {/* Search Area */}
      <form onSubmit={handleClick} className="search-area">
        <input
          type="text"
          className="search-input"
          placeholder="Search..."
          value={searchItem}
          onChange={handleChange}
        />
        <button type="submit" className="search-button">
          <IoIosSearch />
        </button>
      </form>
    </div>
  );
}

export default Header;
