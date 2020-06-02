import React from 'react';
import './ShopPage.css';
import Item from '../Item';

const ShopPage = ({ items, onAddToCart }) => {
    return (
        <ul className="shop-page-items">
            {items.map(item =>
                <li key={item.id} className="shop-page-item">
                    <Item item={item}>
                        <button
                            className="Item-addToCart"
                            onClick={() => onAddToCart(item)}>Add to Cart
                        </button>
                    </Item>
                </li>
            )}
        </ul>
    );
}

export default ShopPage;