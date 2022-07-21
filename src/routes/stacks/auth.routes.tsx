import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AuthStackProps } from '../routes';

import { Sign } from '../../screens/Sign';

const { Navigator, Screen } = createNativeStackNavigator<AuthStackProps>();

export function AuthStack() {
  return (
    <Navigator
      initialRouteName="Signin"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Signin" component={Sign} />
      {/* <Screen name="Signup" component={() => <View />} /> */}
    </Navigator>
  );
}
