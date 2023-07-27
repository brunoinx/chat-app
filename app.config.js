import 'dotenv/config';

export default {
  expo: {
    name: 'chat-app',
    slug: 'chat-app',
    version: '1.0.0',
    assetBundlePatterns: ['**/*'],
  },
  extra: {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SEND_ID,
    appId: process.env.APP_ID,
  },
};
