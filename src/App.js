import React, { Component } from 'react';
import './App.css';
import Index from './Components/Index';
import ProductDetails from './Components/ProductDetails';
import Cart from './Components/Cart';

class App extends Component {
  render() {
    return (
      <div>
        <Index />
        {/* <ProductDetails /> */}
        {/* <Cart /> */}
      </div>      
    );
  }
}

export default App;
