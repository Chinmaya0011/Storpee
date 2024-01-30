import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from '../Context/MyContext';
import '../Styles/SearchItems.css';
import LoadingPage from './LoadingPage';

function SearchItems() {
  const { loading, searchResults, addToCart, cart } = useContext(MyContext);

  const handleItemClick = (e) => {
    e.stopPropagation();
  };

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div>
      {loading ? (
        <LoadingPage />
      ) : (
        <div className='search-products' onClick={handleItemClick}>
          {/* Render search results */}
          {searchResults.map((product, index) => (
            <div key={product.id} className="search-item">
              <h3 className="search-title">{product.title}</h3>
              <img src={product.image} alt={product.title} className="search-image" style={{ maxWidth: '200px' }} />
              <p className="search-price">Price: ${product.price}</p>
              <p className="search-description">Description: {product.description}</p>
              <p className="search-category">Category: {product.category}</p>
              <p className="search-rating">Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
              
              {cart.some(item => item.id === product.id) ? (
                <Link to="/cart" className="go-to-cart-button">Go to Cart</Link>
              ) : (
                <button className="add-to-cart-button" onClick={() => handleAddToCart(product)}>Add to Cart</button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchItems;
