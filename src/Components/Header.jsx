import React, { useContext, useState } from 'react';
import '../Styles/header.css'; // Import the CSS file
import { MyContext } from '../Context/MyContext';
import { FaHome } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { FaCartPlus } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { Link, Navigate } from 'react-router-dom';
import { IoIosLogOut } from "react-icons/io";
import logo from '../images/logo.png';
import { auth } from '../Firebase/firebase';

function Header() {
  const [searchItem, setSearchItem] = useState('');
  const { searchProducts, setSearchResults } = useContext(MyContext);
  const user = localStorage.getItem('user');
  const admin = user ? JSON.parse(user) : null;

  const handleChange = (e) => {
    setSearchItem(e.target.value);
  };

  const handleSignout = async () => {
    try {
      await auth.signOut();
      console.log('User signed out successfully');
      Navigate('/login');
    } catch (error) {
      console.error('Error signing out:', error.message);
    }
  };

  const handleSearch = (e) => {
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
            <Link to="/products" className="nav-link"><FaHome /></Link>

          </li>
          <li className="nav-item">
                <Link to="/cart" className="nav-link"><FaCartPlus /></Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link"><FcAbout /></Link>
              </li>
          {admin && admin.user.email === 'imchinu17@gmail.com' && (
            <>
              <li className="nav-item">
                <Link to="/addproduct" className="nav-link">Add Product</Link>
              </li>
              <li className="nav-item">
                <Link to="/adminDashboard" className="nav-link">Admin Dashboard</Link>
              </li>
              <li className="nav-item">
                <Link to="/adminUpdateProduct" className="nav-link">Admin Update Product</Link>
              </li>
            </>
          )}
          {!admin && ( // Render these links for regular users
            <>
              <li className="nav-item">
                <Link to="/cart" className="nav-link"><FaCartPlus /></Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link"><FcAbout /></Link>
              </li>
            </>
          )}
          <li className="nav-item">
            <Link to={'/login'} onClick={handleSignout} className="nav-link-btn"><IoIosLogOut /></Link> {/* Signout button */}
          </li>
        </ul>
      </nav>
      {/* Search Area */}
      <form onSubmit={handleSearch} className="search-area">
        <input
          type="text"
          className="search-input"
          placeholder="Search..."
          value={searchItem}
          onChange={handleChange}
        />
        <button type="submit" className="search-button">
          <Link to={'/searchItems'}>
            <IoIosSearch />
          </Link>
        </button>
      </form>
    </div>
  );
}

export default Header;
