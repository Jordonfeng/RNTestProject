import React, {
    Component
  } from 'react';
import AppNavigator from './myRN/Navigation';
import Home from './myRN/Home';
//   import Navigation from './myRN/Navigation';

  export default class app extends Component{
      render() {
          return(
            //  <AppNavigator/>
            <Home/>
          );
      }
  }