import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyCmmVeY-oWsaBJNmGtSuCXu47zSOdx4TY4",
  authDomain: "testing-81451.firebaseapp.com",
  databaseURL: "https://testing-81451.firebaseio.com",
  projectId: "testing-81451",
  storageBucket: "testing-81451.appspot.com",
  messagingSenderId: "725666238529",
  appId: "1:725666238529:web:5f1367f993c307f1b776c0",
  measurementId: "G-PFZJ28ZFGG"
};

firebase.initializeApp(config);

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
