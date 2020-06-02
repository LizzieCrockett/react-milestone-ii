import React from 'react';
import './CartEmpty.css'

const CartEmpty = () => {
    return (
        <div className="empty-cart-message">
            <h1>Your Cart is Empty</h1>
            <h2>Go spend some money.</h2>
        </div>
    )
}

export default CartEmpty;