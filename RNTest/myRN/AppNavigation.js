import React,{Component} from 'react';
import {createStackNavigator,createAppContainer} from 'react-navigation';

import Home from './Home';
import Detail from './Detail';

const AppNavigator = createStackNavigator({
    HomeScreen :{screen :Home,navigationOptions:({navigation}) => ({header :null})},
    DetailScreen :{screen :Detail}
},{
    initialRouteName:'HomeScreen'
});

export default createAppContainer(AppNavigator);