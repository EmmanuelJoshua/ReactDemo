import React from 'react';
import './App.css';
import 'tachyons';
import productsData from './components/products';
import ProductItem from './components/productItem.js';

function App() {
  const productComponents = productsData.map(product => <ProductItem key={product.key} item={product} />);
  return (
    <div className='App-header'>
      <div className='product-main-bg'>
        {productComponents}
      </div>

    </div>
  );
}

export default App;
