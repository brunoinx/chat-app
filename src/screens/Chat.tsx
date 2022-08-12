import { GiftedChat } from 'react-native-gifted-chat';
import * as Nb from 'native-base';

import { MessageBallon } from '../components/MessageBallon';

export function Chat() {
  return (
    <>
      <Nb.StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      <Nb.Divider my={10} />

      <GiftedChat
        renderMessage={() => (
          <MessageBallon message="Olá senhor" variant="sender" />
        )}
      />
    </>
  );
}
