import React from 'react';
import './Nav.css';

const Nav = ({ activeTab, onTabChange }) => {
    const itemClass = (tabName) => {
        return `nav-item ${
            activeTab === tabName ? 'selected' : ''
            }`
    }

    return (
        <nav className="nav">
            <ul>
                <li className={itemClass('shop')}>
                    <button onClick={() => onTabChange('shop')}>Shop</button>
                </li>
                <li className={itemClass('cart')}>
                    <button onClick={() => onTabChange('cart')}>Cart</button>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;