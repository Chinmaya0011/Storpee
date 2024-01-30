import React, { useContext, useState } from 'react';
import '../Styles/header.css'; // Import the CSS file
import { MyContext } from '../Context/MyContext';
import { FaHome } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { FaSitemap } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";

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
      
<li className="nav-item"><Link to="/" className="nav-link"><FaHome />

</Link></li>
<li className="nav-item"><Link to="/about" className="nav-link"><FcAbout />
</Link></li>
<li className="nav-item"><Link to="/products" className="nav-link"><FaSitemap />
</Link></li>
<li className="nav-item"><Link to="/cart" className="nav-link"><FaCartPlus />
</Link></li>
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
        <Link to="/searchItems" className="nav-link"><IoIosSearch />
</Link>
        </button>
      </div>
      {/* Correctly capitalize and pass searchResults as a prop */}
    </div>
  );
}

export default Header;
