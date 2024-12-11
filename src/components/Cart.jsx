import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, emptyCart } from '../store/cartSlice';
import '../Styles/cart.css';

const Cart = () => {
    const cartItems = useSelector(state => state.cart.items);
    const dispatch = useDispatch();
    const [checkoutTotal, setCheckoutTotal] = useState(null);

    const handleRemove = (item) => {
        dispatch(removeFromCart(item));
    };

    const handleCheckout = () => {
        const total = cartItems.reduce((acc, item) => acc + (item.price + item.gst) * item.quantity, 0);
        setCheckoutTotal(total); 
    };

    const handleGoToCart = (button) => {
        button.classList.add('active');
        setTimeout(() => {
            button.classList.remove('active');
        }, 500);
        // Logic to navigate to the cart can be added here
    };

    const total = cartItems.reduce((acc, item) => acc + (item.price + item.gst) * item.quantity, 0);

    return (
        <div className="cart">
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    {cartItems.map(item => (
                        <div key={item.id} className="cart-item">
                            <h3>{item.description}</h3>
                            <p>Quantity: {item.quantity}</p>
                            <p>Price: ${item.price}</p>
                            <p>GST: ${item.gst}</p>
                            <p>Total with GST: ${(item.price + item.gst) * item.quantity}</p>
                            <button onClick={() => handleRemove(item)}>Remove</button>
                            <button onClick={(e) => handleGoToCart(e.currentTarget)}>Go to Cart</button>
                        </div>
                    ))}
                    <h3>Total: ${total}</h3>
                    <button onClick={handleCheckout}>Checkout</button>
                    <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
                    {checkoutTotal !== null && <p>Your total bill is: ${checkoutTotal.toFixed(2)}</p>}
                </div>
            )}
        </div>
    );
};

export default Cart;