
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbreact/dist/css/mdb.css';
import './assets/css/style.css'

import { Provider } from 'react-redux'
import configureStore from './store/createStore'
import { startGetPlans } from './actions/plansAction'
import { startGetUser } from './actions/userAction'
import { startGetCategory } from './actions/categoryAction'
import { startGetItem } from './actions/itemAction'
import {startGetExclude } from './actions/excludeAction'
import {startGetAllergy} from './actions/allergyAction'
import {startGetCustomize} from './actions/customizeAction'


const store = configureStore()
console.log(store.getState())
store.subscribe(() => {
  console.log(store.getState())
})



//handle page reload
if(localStorage.getItem('authToken')) {
  store.dispatch(startGetUser())
  store.dispatch(startGetPlans())
  store.dispatch(startGetCategory())
  store.dispatch(startGetItem())
  store.dispatch(startGetExclude())
  store.dispatch(startGetAllergy())
  store.dispatch(startGetCustomize())

}
const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
  )
  

ReactDOM.render(jsx,document.getElementById('root')
);


