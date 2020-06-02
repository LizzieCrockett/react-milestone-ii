import React, { useState } from 'react';
import './App.css';
import ShopHeader from './components/ShopHeader';
import Nav from './components/Nav';
import Content from './components/Content';

const App = () => {

  const [activeTab, setActiveTab] = useState('shop');

  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart(previousCart => [...previousCart, item]);
  };

  const summariseCart = cart => {
    const groupedItems = cart.reduce((summary, item) => {
      summary[item.id] = summary[item.id] || {
        ...item,
        count: 0
      };
      summary[item.id].count++;
      return summary;
    }, {});
    return Object.values(groupedItems);
  };

  const removeItem = (item) => {
    let index = cart.findIndex(i => i.id === item.id);
    if (index >= 0) {
      setCart(cart => {
        const cartCopy = [...cart];
        cartCopy.splice(index, 1);
        return cartCopy;
      });
    }
  };

  return (
    <div className="app">
      <div className="wrapper">
        <ShopHeader />
        <Nav activeTab={activeTab}
          onTabChange={setActiveTab} />
        <div className="main-content">
          <Content tab={activeTab} onAddToCart={addToCart} onRemoveItem={removeItem} cart={summariseCart(cart)} />
        </div>
      </div>
    </div>
  );
}

export default App;
