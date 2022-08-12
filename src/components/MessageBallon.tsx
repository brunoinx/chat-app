import * as Nb from 'native-base';

interface MessageBallonProps {
  message: string;
  variant: 'sender' | 'receiver';
}

export function MessageBallon({ message, variant }: MessageBallonProps) {
  return (
    <Nb.Box
      px="6"
      py="4"
      maxW="50%"
      borderTopLeftRadius={20}
      borderTopRightRadius={20}
      borderBottomLeftRadius={20}
      bgColor={variant === 'sender' ? 'sun.100' : 'muted.100'}
    >
      <Nb.Text
        fontWeight="semibold"
        fontSize="md"
        color={variant === 'sender' ? 'muted.100' : 'black'}
      >
        {message}
      </Nb.Text>
    </Nb.Box>
  );
}
