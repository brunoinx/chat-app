import { NativeBaseProvider, StatusBar } from 'native-base';

import { Routes } from './src/routes';
import { theme } from './src/styles/theme';

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />
      <Routes />
    </NativeBaseProvider>
  );
}
