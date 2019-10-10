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
      apiKey: "secret",
      authDomain: "secret",
      databaseURL: "secret",
      projectId: "ithinka-chat-app-60",
      storageBucket: "",
      messagingSenderId: "secret",
      appId: "secret"
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
