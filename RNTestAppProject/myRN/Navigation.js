import React,{Component} from 'react';
import {StackNavigator} from 'react-navigation';

import Home from './Home';
import Detail from './Detail';

export default class Navigation extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <AppNavigator/>
        )
    }
}
const AppNavigator = StackNavigator({
    page1 :{screen :Home},
    page2 :{screen :Detail}
},{
    initialRouteName:'page1'
});