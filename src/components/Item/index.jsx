import React from 'react';
import './Item.css';

const Item = ({ item, children }) => {
    return (
        <div className="item">
            <div className="item-left-side">
                <img className="item-image" src={item.image} alt={item.name} />
                <div className="item-name">
                    {item.name}
                </div>
                <div className="item-description">
                    {item.description}
                </div>
            </div>
            <div className="item-right-side">
                <div className="item-price">
                    £{item.price}
                </div>
                {children}
            </div>
        </div>
    )
}

export default Item;