import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AppStackProps } from '../routes';
import { Home } from '../../screens/Home';
import { Chat } from '../../screens/Chat';

const { Navigator, Screen } = createNativeStackNavigator<AppStackProps>();

export function AppStack() {
  return (
    <Navigator initialRouteName="Home">
      <Screen name="Home" component={Home} />
      <Screen name="Chat" component={Chat} />
    </Navigator>
  );
}
