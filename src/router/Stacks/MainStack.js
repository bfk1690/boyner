import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const HomeNav = createBottomTabNavigator();

import Home from '../../screens/Home';
import Categories from '../../screens/Categories';
import Basket from '../../screens/Basket';
import Favorites from '../../screens/Favorites';
import Account from '../../screens/Account';
import Tabbar from '../../components/Tabbar/index';

class MainStack extends React.Component {
  render() {
    return (
      <HomeNav.Navigator
        tabBar={props => <Tabbar {...props} />}
        initialRouteName={'Home'}>
        <HomeNav.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <HomeNav.Screen
          name="Categories"
          component={Categories}
          options={({route}) => ({
            animationEnabled: true,
            headerShown: false,
          })}
        />
        <HomeNav.Screen
          name="Basket"
          component={Basket}
          options={({route}) => ({
            animationEnabled: true,
            headerShown: false,
          })}
        />
        <HomeNav.Screen
          name="Favorites"
          component={Favorites}
          options={({route}) => ({
            animationEnabled: true,
            headerShown: false,
          })}
        />
        <HomeNav.Screen
          name="Account"
          component={Account}
          options={({route}) => ({
            animationEnabled: true,
            headerShown: false,
          })}
        />
      </HomeNav.Navigator>
    );
  }
}

export {MainStack};
