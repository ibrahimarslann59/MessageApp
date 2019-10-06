import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import firebase from 'firebase';
import '@firebase/auth';

import reducers from './src/reducers/index.js';
import Router from './Router';


console.disableYellowBox = true;

export default class App extends Component {

  componentWillMount() {

    firebase.initializeApp({
      apiKey: "AIzaSyAlPce_RFRvGdXJGfxTbptKuyaaLDRR6kU",
      authDomain: "ithinka-chat-app-60.firebaseapp.com",
      databaseURL: "https://ithinka-chat-app-60.firebaseio.com",
      projectId: "ithinka-chat-app-60",
      storageBucket: "",
      messagingSenderId: "512450821803",
      appId: "1:512450821803:web:21a044c5c6046e4d"
    });
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
