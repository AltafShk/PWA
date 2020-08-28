import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase'

// const config = {
//   apiKey: "AIzaSyCmmVeY-oWsaBJNmGtSuCXu47zSOdx4TY4",
//   authDomain: "testing-81451.firebaseapp.com",
//   databaseURL: "https://testing-81451.firebaseio.com",
//   projectId: "testing-81451",
//   storageBucket: "testing-81451.appspot.com",
//   messagingSenderId: "725666238529",
//   appId: "1:725666238529:web:5f1367f993c307f1b776c0",
//   measurementId: "G-PFZJ28ZFGG"
// };

const config = {
  apiKey: "AIzaSyDpXHo-3u_iOnDx4mPL2tgxSEmLXkd8pgY",
  authDomain: "pwa-appusers.firebaseapp.com",
  databaseURL: "https://pwa-appusers.firebaseio.com",
  projectId: "pwa-appusers",
  storageBucket: "pwa-appusers.appspot.com",
  messagingSenderId: "635680851724",
  appId: "1:635680851724:web:fa927d94e43feda264eb29",
  measurementId: "G-1MW1GKQDCG"
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
