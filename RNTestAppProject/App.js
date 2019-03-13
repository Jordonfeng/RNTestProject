import React, {
    Component
  } from 'react';
  import {
    View
  } from 'react-native';
  import {
    StackNavigator
  } from 'react-navigation';
  import Home from './myRN/home';

  export default class app extends React.Component{
      render() {
          return(
              <Navigator initialRoute = {{name : 'home',component : Home}} 
              configureScene = {(route) => {
                  return Navigator.SceneConfigs.FloatFromRight;
              }} 
              renderScene = {(route,navigator) => {
                  const Component = route.component;
                  return <Component {...route.params} navigator = {navigator}/>
              }}/>
          );
      }
  }