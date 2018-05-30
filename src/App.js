import React, { Component } from 'react';
import { YellowBox } from 'react-native';
import _ from 'lodash';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
import LibraryList from './components/LibraryList';
import ReduxThunk from 'redux-thunk';
import Router from './Router';

YellowBox.ignoreWarnings(['Setting a timer']);
const _console1 = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console1.warn(message);
  }
};
YellowBox.ignoreWarnings(['isMounted(...)']);
const _console2 = _.clone(console);
console.warn = message => {
  if (message.indexOf('isMounted(...)') <= -1) {
    _console2.warn(message);
  }
};
YellowBox.ignoreWarnings(['Warning: Each', 'Warning: Failed']);
const _console3 = _.clone(console);
console.warn = message => {
  if (message.indexOf('Warning: Each', 'Warning: Failed') <= -1) {
    _console3.warn(message);
  }
};

class App extends Component {
  componentWillMount(){
    var config = {
      apiKey: "AIzaSyDxFjMDFjt5fu7tUnGt4Pu-fP9b2xSMHR0",
      authDomain: "socail-195cd.firebaseapp.com",
      databaseURL: "https://socail-195cd.firebaseio.com",
      projectId: "socail-195cd",
      storageBucket: "socail-195cd.appspot.com",
      messagingSenderId: "1023349768719"
    };
    firebase.initializeApp(config);
    }
    render(){
      const store = createStore(reducers, {}, applyMiddleware(ReduxThunk)); 
  return (
    <Provider store={store}>
        <Router />
    </Provider>
    );
  }
}

/***** Export component so can be used elsewhere *****/
export default App;