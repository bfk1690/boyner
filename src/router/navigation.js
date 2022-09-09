import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//TABBAR
import Tabbar from '../components/Tabbar';

//App Stack
const App = createBottomTabNavigator();

import {HomeStack} from './Stacks/HomeStack';
import Categories from '../screens/Categories';
import Basket from '../screens/Basket';
import Favorites from '../screens/Favorites';
import Account from '../screens/Account';

class AppStack extends React.Component {
  render() {
    return (
      <App.Navigator
        initialRouteName={'HomeStack'}
        tabBar={props => <Tabbar {...props} />}>
        <App.Screen
          name="HomeStack"
          component={HomeStack}
          options={({route}) => ({
            animationEnabled: true,
            headerShown: false,
          })}
        />
        <App.Screen
          name="Categories"
          component={Categories}
          options={({route}) => ({
            animationEnabled: true,
            headerShown: false,
          })}
        />
        <App.Screen
          name="Basket"
          component={Basket}
          options={({route}) => ({
            animationEnabled: true,
            headerShown: false,
          })}
        />
        <App.Screen
          name="Favorites"
          component={Favorites}
          options={({route}) => ({
            animationEnabled: true,
            headerShown: false,
          })}
        />
        <App.Screen
          name="Account"
          component={Account}
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
