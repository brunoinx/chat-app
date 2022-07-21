import { Box, Center, Heading, Image } from 'native-base';

import backImg from '../assets/back-image.png';

export function Sign() {
  return (
    <Box flex={1}>
      <Image
        source={backImg}
        alt="imagem de background"
        resizeMode="cover"
        w="full"
      />

      <Box
        bg="white"
        w="full"
        h="full"
        borderTopLeftRadius="60"
        position="absolute"
        top="1/3"
      >
        <Center mt="16">
          <Heading size="xl">Sign</Heading>
        </Center>
      </Box>
    </Box>
  );
}
