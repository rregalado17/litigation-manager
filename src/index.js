import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.scss'
import App from './App';
 import {
  BrowserRouter as Router } from "react-router-dom";
import { store } from './store/store';
import { Provider } from 'react-redux';
import { fetchLawyers } from './store/lawyers';
import { fetchLitigations } from './store/litigations';

const root = ReactDOM.createRoot(document.getElementById('root'));

store.subscribe(() => {
  console.log('change')
})

store.dispatch(fetchLawyers());
store.dispatch(fetchLitigations());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);
