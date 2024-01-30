import React, { useContext, useState } from 'react';
import '../Styles/Header.css'; // Import the CSS file
import { MyContext } from '../Context/MyContext';

import { Link } from 'react-router-dom';
function Header() {
  const [searchItem, setSearchItem] = useState('');
  const { searchProducts, setSearchResults} = useContext(MyContext); // Include searchResults in the destructuring

  const handleChange = (e) => {
    setSearchItem(e.target.value);
   
    
  };

  const handleClick = () => {
    const results = searchProducts(searchItem);
    setSearchResults(results);
    // Clear search input after search

     // Set showProducts to false
    console.log('Searching for:', searchItem);
    searchItem=' '
  };

  return (
    <div className="header-container">
      {/* Navigation */}
      <nav className="nav">
        <ul className="nav-list">
      
<li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
<li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
<li className="nav-item"><Link to="/products" className="nav-link">Products</Link></li>
<li className="nav-item"><Link to="/cart" className="nav-link">Cart</Link></li>
         </ul>
      </nav>
      {/* Search Area */}
      <div className="search-area">
        <input
          type="text"
          className="search-input"
          placeholder="Search..."
          value={searchItem}
          onChange={handleChange}
        />
        <button type="submit" className="search-button" onClick={handleClick}>
        <Link to="/searchItems" className="nav-link">Search</Link>
        </button>
      </div>
      {/* Correctly capitalize and pass searchResults as a prop */}
    </div>
  );
}

export default Header;