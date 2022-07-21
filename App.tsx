import { NativeBaseProvider, StatusBar } from 'native-base';
import { Routes } from './src/routes';

export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor="transparent"
      />
      <Routes />
    </NativeBaseProvider>
  );
}
