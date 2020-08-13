import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./assets/css/reset.css"
import "./assets/js/rem"
import 'antd/dist/antd.css';
import {dva} from "dva"
import 'antd-mobile/dist/antd-mobile.css'
// import 
import store from "./store"

import { Provider } from "react-redux"
import { BrowserRouter, HashRouter } from "react-router-dom"
Component.prototype.$img = "http://localhost:3001"
ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
  ,
  document.getElementById('root')
);