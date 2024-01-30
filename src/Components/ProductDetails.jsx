import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/productDetails.css';
import { MyContext } from '../Context/MyContext';

function ProductDetails({ product, onClose }) {
    const { addToCart, handleBuy } = useContext(MyContext);
    const [addedToCart, setAddedToCart] = useState(false);

    const handleAddToCart = (product) => {
        // Implement addToCart functionality or handle it according to your application's logic
        console.log("Adding to cart:", product);
        addToCart(product); // Call the addToCart function from the context
        setAddedToCart(true); // Set addedToCart to true when product is added to cart
    };

    const handledBuy = (product) => {
        // Implement buy functionality or handle it according to your application's logic
        handleBuy(product)
    };

    return (
        <div className="pd-container">
            <div className="pd-item">
                <div className="pd-image">
                    <img className='pd-image-photo' src={product.image} alt={product.title} />
                </div>
                <div className="pd-details">
                    <h3 className="pd-title">{product.title}</h3>
                    <p className="pd-price">Price: {product.price}</p>
                    {/* Product details */}
                    <p className="pd-description">{product.description}</p>
                    {/* Buttons */}
                    <div className="pd-buttons">
                        <Link to="/buy" className="pd-buy-button" onClick={() => handledBuy(product)}>Buy</Link>
                        {addedToCart ? (
                            <Link to="/cart" className="pd-go-to-cart-button">Go to Cart</Link> // Render "Go to Cart" button if product is added
                        ) : (
                            <button className="pd-add-to-cart-button" onClick={() => handleAddToCart(product)}>Add to Cart</button>
                        )}
                    </div>
                    {/* Close button */}
                    <button className="pd-close-button" onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;
