import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const HomeNav = createNativeStackNavigator();

import Home from '../../screens/Home';

class HomeStack extends React.Component {
  render() {
    return (
      <HomeNav.Navigator initialRouteName={'HomeStack'}>
        <HomeNav.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
      </HomeNav.Navigator>
    );
  }
}

export {HomeStack};
