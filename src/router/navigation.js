import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

//App Stack
const App = createNativeStackNavigator();
const ModalStack = createNativeStackNavigator();

import {TouchableOpacity} from 'react-native';
import {MainStack} from './Stacks/MainStack';
import ProductDetail from '../screens/ProductDetail/index';
import Filter from '../screens/Filter';
import FilterDetail from '../screens/Filter/filterDetail';
import {Close} from '../components/icons';
import {theme} from '../utils/theme';
import {gh} from '../utils/functions';
import {navigationRef} from '../RootNavigation';

const ModalStackView = () => (
  <ModalStack.Navigator
    screenOptions={{
      headerShown: true,
    }}>
    <ModalStack.Screen
      name="Filter"
      component={Filter}
      options={{
        presentation: 'modal',
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigationRef.goBack()}>
            <Close fill={theme.black} width={gh(22)} height={gh(22)} />
          </TouchableOpacity>
        ),
        // headerShown: false,
      }}
    />
    <ModalStack.Screen
      name="FilterDetail"
      component={FilterDetail}
      options={{
        presentation: 'card',
        // headerShown: false,
      }}
    />
  </ModalStack.Navigator>
);

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
        <App.Screen
          name="Filter"
          component={ModalStackView}
          options={{
            presentation: 'modal',
            headerShown: false,
          }}
        />
      </App.Navigator>
    );
  }
}

export {AppStack};
