/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {
  Component
} from 'react';
import Home from './myRN/Home';
import AppNavigator from './myRN/AppNavigation';

export default class App extends React.Component{
  render() {
    return (
      // <Home/>
      <AppNavigator/>
    );
  }
}

