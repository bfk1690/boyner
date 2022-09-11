import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppStack} from './router/navigation';
import {navigationRef} from './RootNavigation';
import FlashMessage, {showMessage} from 'react-native-flash-message';

export default function Project() {
  return (
    <NavigationContainer ref={navigationRef}>
      <FlashMessage position="top" />
      <AppStack />
    </NavigationContainer>
  );
}
