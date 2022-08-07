import { extendTheme } from 'native-base';

export const theme = extendTheme({
  colors: {
    sun: {
      100: '#FFA925',
      200: '#FF7841',
    },
    text: '#262626',
  },
  config: {
    initialColorMode: 'light',
  },
});
