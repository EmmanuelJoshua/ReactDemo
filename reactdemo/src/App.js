import React from 'react';
import './App.css';
import 'tachyons';
import Header from './components/Header.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className='App-header'>
      <Header/>
        <ul>
          <li>Programmer</li>
          <li>Geek</li>
          <li>Fun Haver</li>
        </ul>
        <Footer/>
    </div>
  );
}

export default App;
