import React, { Component } from 'react';
import './App.css';
import 'tachyons';
import productsData from './components/products';
import ProductItem from './components/productItem.js';

class App extends Component {
  constructor(){
    super();
    this.state = {
      isLoggedIn: true
    }
  }

  render() {
    const productComponents = productsData.map(product => <ProductItem key={product.key} item={product} />);
    return (
      <div className='App-header'>
        <div className='product-main-bg'>
          {this.state.isLoggedIn ? 'In' : 'Out'}
          {productComponents}
        </div>

      </div>
    );
  }
}

export default App;
