import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from "../Context/MyContext";
import "../Styles/Products.css";
import ProductDetails from "./ProductDetails";

function Products() {
    const { products, addToCart, cart, showProducts, setShowProducts } = useContext(MyContext);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleAddToCart = (product) => {
        addToCart(product);
    };

    const handleViewDetails = (product) => {
        setSelectedProduct(product);
        setShowProducts(false);
    };

    const handleCloseProductDetails = () => {
        setSelectedProduct(null);
        setShowProducts(true);
    };

    return (
        <div className="products-container">
            {showProducts && (
                <ul className="products-list">
                    {products.map((product, index) => (
                        <li key={index} className="product-item">
                            <div className="product-image">
                                <img className='product-image-photo' src={product.image} alt={product.title} />
                            </div>
                            <div className="product-details">
                                <h3 className="product-title">{product.title}</h3>
                                <p className="product-price">Price: {product.price}</p>
                                {/* Conditionally render "Go to Cart" link or "Add to Cart" button */}
                                {cart.some(item => item.id === product.id) ? (
                                    <Link to="/cart" className="go-to-cart-button">Go to Cart</Link>
                                ) : (
                                    <button className="add-to-cart-button" onClick={() => handleAddToCart(product)}>Add to Cart</button>
                                )}
                                <button className="view-details-button" onClick={() => handleViewDetails(product)}>View Details</button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
            {selectedProduct && <ProductDetails product={selectedProduct} onClose={handleCloseProductDetails} />}
        </div>
    );
}

export default Products;
