import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppStack} from './router/navigation';
import {navigationRef} from './RootNavigation';

export default function Project() {
  return (
    <NavigationContainer ref={navigationRef}>
      <AppStack />
    </NavigationContainer>
  );
}
