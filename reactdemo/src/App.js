import React, { Component } from 'react';
import './App.css';
import 'tachyons';
// import productsData from './components/products';
// import ProductItem from './components/productItem.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => {
      return {
          isLoggedIn: !prevState.isLoggedIn
      }
    })
  }

  render() {
    // const productComponents = productsData.map(product => <ProductItem key={product.key} item={product} />);
    return (
      <div className='App-header'>
        <div className='product-main-bg'>

            {this.state.isLoggedIn ? <h2>Logged in</h2> : <h2>Logged out</h2> }
          <input type='button' value={this.state.isLoggedIn ? 'Login' : 'Logout'} onClick={this.handleClick} />
        </div>

      </div>
    );
  }
}

export default App;
