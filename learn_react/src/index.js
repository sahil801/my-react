import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import Counter from './cmponents/counter';
import Counter1 from './cmponents/counter1';
ReactDOM.render(
  <React.StrictMode>
    {/* <Counter /> */}
    <Counter1 />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
