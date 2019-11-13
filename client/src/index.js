import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {StripeProvider, Elements} from 'react-stripe-elements'

ReactDOM.render(
  <StripeProvider apiKey={
    process.env.REACT_APP_PUBLISHABLE_TEST_APIKEY
    || process.env.REACT_APP_PUBLISHABLE_LIVE_APIKEY
      }>
      <Elements>
        <App />
      </Elements>
  </StripeProvider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
