import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AuthStackProps } from '../routes';

import { SignIn } from '../../screens/SignIn';
import { SignUp } from '../../screens/SignUp';

const { Navigator, Screen } = createNativeStackNavigator<AuthStackProps>();

export function AuthStack() {
  return (
    <Navigator
      initialRouteName="SignIn"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="SignIn" component={SignIn} />
      <Screen name="SignUp" component={SignUp} />
    </Navigator>
  );
}
