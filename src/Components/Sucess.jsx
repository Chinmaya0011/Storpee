import React, { useContext } from 'react';
import { Link } from 'react-router-dom'; // Import the Link component
import { MyContext } from '../Context/MyContext';
import '../Styles/sucess.css'

function Success() {
    const { purchasedProductsData, handleOrderRemove } = useContext(MyContext);

    return (
        <div className="success-container">
            {purchasedProductsData.length === 0 ? (
                <div className="no-order-message">
                    <p className="no-order-text">You haven't made any purchases yet.</p>
                    {/* Use Link instead of button */}
                    <Link to={'/products'} className="purchase-button">Purchase Now</Link>
                </div>
            ) : (
                purchasedProductsData.map((product, index) => (
                    <div key={index} className="suc-details">
                        <h2 className="suc-heading">Order Placed Successfully</h2>
                        <p className="suc-thank-you">Thank you for your purchase!</p>
                        <p className="suc-order-placed">Your order has been successfully placed.</p>
                        <div className="suc-info">
                            <img className="suc-image" src={product.image} alt={product.title} />
                            <p className="suc-title">Title: {product.title}</p>
                            <p className="suc-price">Price: {product.price}</p>
                        </div>
                        <div className="suc-button">
                            <button className="suc-track">Track</button>
                            <button className="suc-remove" onClick={() => handleOrderRemove(product.title)}>Remove</button>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}

export default Success;
