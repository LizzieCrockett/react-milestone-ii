import React from 'react';
import Item from '../Item';
import CartEmpty from '../CartEmpty';
import './CartPage.css'

const CartPage = ({ items, onPlusOne, onMinusOne }) => {
    return (
        items.length === 0 ? <CartEmpty /> :
            <ul className="cart-page-items">
                {items.map(item =>
                    <li key={item.id} className="cart-page-item">
                        <Item item={item}>
                            <div className="cart-item-manage">
                                <button className="cart-item-minusone"
                                    onClick={() => onMinusOne(item)}>&#45;</button>
                                <span className="cart-item-count">{item.count}</span>
                                <button className="cart-item-plusone"
                                    onClick={() => onPlusOne(item)}>&#43;</button>
                            </div>
                        </Item>
                    </li>
                )}
                <li className="cart-page-item cart-page-total">
                    Total: £{items.reduce((sum, item) => sum + (item.price * item.count), 0)}
                </li>
            </ul>
    )
}


export default CartPage;