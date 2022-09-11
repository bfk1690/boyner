import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//TABBAR
import Tabbar from '../components/Tabbar';

//App Stack
const App = createNativeStackNavigator();
// const App = createBottomTabNavigator();

import {MainStack} from './Stacks/MainStack';
import ProductDetail from '../screens/ProductDetail/index';
import Basket from '../screens/Basket';

class AppStack extends React.Component {
  render() {
    return (
      <App.Navigator initialRouteName={'MainStack'}>
        <App.Screen
          name="MainStack"
          component={MainStack}
          options={({route}) => ({
            animationEnabled: true,
            headerShown: false,
          })}
        />
        <App.Screen
          name="ProductDetail"
          component={ProductDetail}
          options={({route}) => ({
            animationEnabled: true,
            headerShown: false,
          })}
        />
      </App.Navigator>
    );
  }
}

export {AppStack};
