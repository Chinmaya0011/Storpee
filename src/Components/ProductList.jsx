import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MyContext } from '../Context/MyContext';
import '../Styles/productList.css'; // Make sure to import the correct CSS file

function ProductList() {
  const { products, addToCart, cart } = useContext(MyContext); // Accessing products, addToCart function, and cart from context
  const { cat } = useParams(); // Accessing the category parameter from the route

  // Filter products based on the selected category
  const filteredProducts = products.filter(product => product.category === cat);

  // Function to handle "Add to Cart" button click
  const handleAddToCart = (productId) => {
    // Call addToCart function from context to add product to the cart
    addToCart(productId);
    console.log(`Product ID ${productId} added to cart`);
  };

  // Function to handle "Buy Now" button click
  const handleBuyNow = (productId) => {
    // Implement logic for "Buy Now" button
    console.log(`Buy Now clicked for product ID: ${productId}`);
  };

  return (
    <div className="pl-products-container">
      {filteredProducts.map((product, index) => (
        <div key={index} className="pl-product-item">
          <img className="pl-image" src={product.image} alt={product.title} />
          <p className="pl-title">{product.title}</p>
          <p className="pl-price">{product.price}</p>
          <p className="pl-description">{product.description}</p>
          <div className="pl-button-container">
            <button className="pl-buy-button" onClick={() => handleBuyNow(product.id)}>Buy Now</button>
            {cart.some(item => item.id === product.id) ? (
              <Link to="/cart" className="pl-added-button">Go to Cart</Link>
            ) : (
              <button className="pl-add-to-cart-button" onClick={() => handleAddToCart(product)}>Add to Cart</button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
