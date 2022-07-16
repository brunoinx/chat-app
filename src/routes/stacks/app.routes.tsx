import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';

import { AppStackProps } from '../routes';

const { Navigator, Screen } = createNativeStackNavigator<AppStackProps>();

export function AppStack() {
  return (
    <Navigator>
      <Screen name="Home" component={() => <View />} />
      <Screen name="Chat" component={() => <View />} />
    </Navigator>
  );
}
