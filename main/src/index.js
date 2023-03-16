import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

// Initialize Firebase
initializeApp({
  apiKey: "AIzaSyB6s4Vmt62BYllOeBUh1TeS6F7HrC_XrUg",
  authDomain: "pandora-luxury.firebaseapp.com",
  projectId: "pandora-luxury",
  storageBucket: "pandora-luxury.appspot.com",
  messagingSenderId: "237490188883",
  appId: "1:237490188883:web:9171c8cbd4c42e194a4ca6"
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/*<React.StrictMode>*/}
      <App />
    {/*</React.StrictMode>*/}
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
