import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { AppStackProps, AuthStackProps } from '../routes/routes';

export function useAuthNavigation() {
  const navigation = useNavigation<NativeStackNavigationProp<AuthStackProps>>();
  return navigation;
}

export function useAppNavigation() {
  const navigation = useNavigation<NativeStackNavigationProp<AppStackProps>>();
  return navigation;
}
