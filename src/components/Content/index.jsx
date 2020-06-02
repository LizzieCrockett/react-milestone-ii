import React from 'react';
import ShopPage from '../ShopPage';
import CartPage from '../CartPage';
import items from '../../constants/item-data';

const Content = ({ tab, onAddToCart, onRemoveItem, cart }) => {


    switch (tab) {
        default:
        case 'shop':
            return <ShopPage items={items} onAddToCart={onAddToCart} />;
        case 'cart':
            return <CartPage items={cart} onPlusOne={onAddToCart} onMinusOne={onRemoveItem} />
    }
};

export default Content;

