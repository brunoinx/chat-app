import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AppStack } from './stacks/app.routes';
import { AuthStack } from './stacks/auth.routes';

export function Routes() {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
}
