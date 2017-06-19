import { StartStack } from './Router';
import { TabRouter } from './Router';
import React, { Component } from 'react';
import * as firebase from 'firebase';

class App extends Component {

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyAQPcOHji3ASAb7WTsVbfpCW5Bjo58X7K4",
    authDomain: "app-final-4a1d7.firebaseapp.com",
    databaseURL: "https://app-final-4a1d7.firebaseio.com",
    projectId: "app-final-4a1d7",
    storageBucket: "app-final-4a1d7.appspot.com",
    messagingSenderId: "902763788122"
    });
  }

  render() {
    return (
      <StartStack  />
    );
  }
}


export default App;