import React,{Component} from 'react';
import {createStackNavigator} from 'react-navigation';

import Home from './Home';
import Detail from './Detail';

const AppNavigator = createStackNavigator({
    HomeScreen :{screen :Home},
    DetailScreen :{screen :Detail}
});

export default AppNavigator;