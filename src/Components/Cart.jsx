import React, { useContext } from "react";
import { MyContext } from "../Context/MyContext";
import '../Styles/cart.css';

function Cart() {
  const { cart, removeFromCart, clearCart, updateQuantity } = useContext(MyContext);

  // Calculate total price of items in the cart
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Calculate discount
  const discountPercentage = totalPrice >= 200 ? 0.2 : 0;
  const discountAmount = totalPrice * discountPercentage;
  const discountedPrice = totalPrice - discountAmount;

  return (
    <div className="cart">
      <h2 className="cart-title">Shopping Cart</h2>
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
      <button className="clear-cart-button" onClick={clearCart}>Clear Cart</button>
    </div>
  );
}

export default Cart;
