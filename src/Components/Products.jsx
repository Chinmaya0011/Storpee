import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from "../Context/MyContext";
import "../Styles/Products.css";
import ProductDetails from "./ProductDetails";

function Products() {
    const { products, addToCart, cart, showProducts, setShowProducts, handleBuy, buy, updateQuantity } = useContext(MyContext);
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

    const handleBuyProduct = (product) => {
        // Check if the product already exists in the buy list
        const existingProduct = buy.find(item => item.id === product.id);
        
        if (existingProduct) {
            // If the product exists, update its quantity
            updateQuantity(product.id, existingProduct.quantity + 1);
        } else {
            // If the product doesn't exist, add it to the buy list with quantity 1
            handleBuy(product);
        }
    };

    return (
        <div className="products-container">
            {showProducts && (
                <ul className="products-list">
                    {products.map((product, index) => (
                        <li key={index} className="product-item" >
                            <div className="product-image">
                                <img className='product-image-photo' src={product.image} alt={product.title} onClick={() => handleViewDetails(product)}/>
                            </div>
                            <div className="product-details">
                                <h3 className="product-title">{product.title}</h3>
                                <p className="product-price">Price: {product.price}</p>
                                {/* Display quantity if product is in cart */}
                                {cart.some(item => item.id === product.id) && (
                                    <p className="product-quantity">Quantity: {cart.find(item => item.id === product.id).quantity}</p>
                                )}
                                <Link to={'/buy'} className="pd-buy-button" onClick={() => handleBuyProduct(product)}>Buy</Link>
                                {cart.some(item => item.id === product.id) ? (
                                    <Link to="/cart" className="go-to-cart-button">Go to Cart</Link>
                                ) : (
                                    <button className="add-to-cart-button" onClick={() => handleAddToCart(product)}>Add to Cart</button>
                                )}
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
