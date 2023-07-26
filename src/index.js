import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//Start of AMplify config
import { Amplify } from 'aws-amplify';
import config from './aws-exports';


let updatedAwsExports = {};


  Amplify.Logger.LOG_LEVEL = "DEBUG";
  updatedAwsExports = {
    ...config,
    oauth: {
      ...config.oauth,
      domain: "login.metalive.art",
      scope: ["email", "openid"],
      //redirectSignIn: "https://main.dphac8bawa2rt.amplifyapp.com/",
      //redirectSignOut: "https://main.dphac8bawa2rt.amplifyapp.com/",
      redirectSignIn: "http://localhost:3000/",
      redirectSignOut: "http://localhost:3000/",
      responseType: "code" // or 'token', whatever you configured
    },
  };



Amplify.configure(updatedAwsExports);
// Amplify config finished





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
