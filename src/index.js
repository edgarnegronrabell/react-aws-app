import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase = require("firebase")
require('firebase/firestore')


firebase.initializeApp({
  apiKey: "AIzaSyBnCSUvaXScQOgjwCxFwyLeGA6L-dw2xKA",
  authDomain: "evernote-clone-d5ff4.firebaseapp.com",
  databaseURL: "https://evernote-clone-d5ff4.firebaseio.com",
  projectId: "evernote-clone-d5ff4",
  storageBucket: "evernote-clone-d5ff4.appspot.com",
  messagingSenderId: "966134572120",
  appId: "1:966134572120:web:d1eef17d798a021863162d"
});


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('evernote-container')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
