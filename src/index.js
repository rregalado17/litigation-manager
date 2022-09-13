import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.scss'
import App from './App';
 import {
  BrowserRouter as Router } from "react-router-dom";
import { store } from './store/store';
import { Provider } from 'react-redux';



const root = ReactDOM.createRoot(document.getElementById('root'));
// store.dispatch(fetchLawyers());
// store.dispatch(fetchLitigations());
// setTimeout(() => store.dispatch(updateLawyer(1), 2000))
// store.dispatch(addLawyer({lawyer: {first_name: "Matt", last_name: "Hoffman"}}));
// store.dispatch(addLitigation( {litigations: {lawyer_id: 2, caption: "USA v. China", court: 'SDNY', status: 'Active'}}));


root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);
