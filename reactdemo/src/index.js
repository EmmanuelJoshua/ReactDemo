import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Forms from './Forms'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Forms />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
