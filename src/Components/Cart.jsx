import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../Context/MyContext";
import "../Styles/cart.css";

function Cart() {
  const { handleBuy, cart, removeFromCart, clearCart, updateQuantity } = useContext(MyContext);

  // Calculate total price of items in the cart
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Calculate discount
  const discountPercentage = totalPrice >= 200 ? 0.2 : 0;
  const discountAmount = totalPrice * discountPercentage;
  const discountedPrice = totalPrice - discountAmount;

  // Function to handle buy action for all items in the cart
  const handleBuyAll = () => {
    cart.forEach(item => {
      // Pass the entire item object (including quantity) to handleBuy
      handleBuy(item);
    });
  };

  return (
    <div className="cart">
      <h2 className="cart-title">Shopping Cart</h2>
      {cart.length > 0 ? (
        <>
          <ul className="cart-items">
            {cart.map((item, index) => (
              <li key={index} className="cart-item">
                <span className="cart-item-index">{index + 1}</span>
                <img src={item.image} alt={item.title} className="cart-item-image" />
                <span className="cart-item-details">
                  <span className="cart-item-title">{item.title}</span> - <span className="cart-item-price">${item.price}</span>
                </span>
                <button className="remove-button" onClick={() => removeFromCart(item.id)}>Remove</button>
                <button className="update-quantity-button" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                <span className="cart-item-quantity">{item.quantity}</span>
                <button className="update-quantity-button" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
              </li>
            ))}
          </ul>
          <p className="total-price">Total Price: ${totalPrice}</p>
          {totalPrice >= 200 ? (
            <p className="discounted-price">Discounted Price (20% discount): ${discountedPrice}</p>
          ) : (
            <p className="discount-info">Your order does not qualify for a discount. Add ${200 - totalPrice} more to get a 20% discount.</p>
          )}
          <Link to={'/buy'} className="buy-button-bu" onClick={handleBuyAll}>Go to Buy</Link>
          <button className="clear-cart-button" onClick={clearCart}>Clear Cart</button>
        </>
      ) : (
        <div className="empty-cart-message">
          <p>Your cart is empty.</p>
          <p>Please add products.</p>
          <Link to="/products" className="add-product-button">Add Product</Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
