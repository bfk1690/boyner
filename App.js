import {View, Text} from 'react-native';
import React from 'react';
import Project from './src/App';
import {AppRegistry, LogBox} from 'react-native';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import store from './src/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <Project />
    </Provider>
  );
}

AppRegistry.registerComponent(appName, () => App);
