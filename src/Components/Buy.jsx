import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from '../Context/MyContext';
import '../Styles/Buy.css';

function Buy() {
    const { buy, clearBuy, removeFromBuy, updateQuantity } = useContext(MyContext);

    const handleClearBuy = () => {
        clearBuy(); // Function to clear purchased products
    };

    // Calculate total price of all purchased products
    const totalPrice = buy.reduce((acc, product) => acc + (product.price * product.quantity), 0);

    // Calculate the amount needed to reach $200 for 20% discount
    const amountNeededForDiscount = totalPrice >= 200 ? 0 : 200 - totalPrice;

    // Function to handle navigating back to buy items
    const handleGoToBuy = () => {
        // Implement navigation logic to go back to buy items
    };

    const handleProceedToBuy = () => {
        // Implement logic to proceed to the checkout or payment page
        // For example, you can navigate to a checkout route or show a modal for payment options
        console.log('Proceed to Buy');
    };

    return (
        <div className={`buy-container ${buy.length > 0 ? 'buy-has-items' : 'buy-empty'}`}>
            {buy.length > 0 ? ( // Check if there are purchased products
                <>
                    {buy.map((product, index) => (
                        <div key={index} className={`buy-item buy-item-${index}`}>
                            <div className="buy-image-container">
                                <img src={product.image} alt={product.title} className="buy-image" />
                            </div>
                            <div className="buy-details-container">
                                <p className="buy-title">Title: {product.title}</p>
                                <p className="buy-price">Price: ${product.price}</p>
                                <p className="buy-quantity">Quantity: {product.quantity}</p>
                                <p className="buy-total">Total: ${product.price * product.quantity}</p>
                                <button className="buy-remove-button" onClick={() => removeFromBuy(product.id)}>Remove</button>
                            </div>
                        </div>
                    ))}
                    <p className="buy-total-price">Total Price: ${totalPrice}</p>
                    {totalPrice < 200 && <p className="buy-discount-message">Add ${amountNeededForDiscount.toFixed(2)} more to get 20% discount</p>}
                    <button className="buy-proceed-button" onClick={handleProceedToBuy}>Proceed to Buy</button>
                    <button className="buy-clear-button" onClick={handleClearBuy}>Clear Buy</button>
                </>
            ) : (
                <div className="empty-buy-message">
                    <p className='buy-p'>You haven't purchased any items yet.</p>
                    <p className='buy-p'>Please go back to buy items.</p>
                    <Link to="/products" className="go-to-buy-button" onClick={handleGoToBuy}>Buy product</Link>
                </div>
            )}
        </div>
    );
}

export default Buy;
