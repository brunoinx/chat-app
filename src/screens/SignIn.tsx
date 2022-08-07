import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import {
  Box,
  Center,
  Heading,
  Image,
  Stack,
  Icon,
  Text,
  VStack,
  Flex,
} from 'native-base';
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons';

import backImg from '../assets/back-image.png';

import { Input } from '../components/Form/Input';
import { CustomButton } from '../components/Form/Button';
import { useAuthNavigation } from '../hooks/useNavigation';

export function SignIn() {
  const navigation = useAuthNavigation();

  function handleNavigateToSignUp() {
    navigation.navigate('SignUp');
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
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
          <Center mt="10">
            <Heading size="xl" color="sun.100">
              Log In
            </Heading>
          </Center>

          <Center
            h="60%"
            w="80%"
            mt={12}
            justifyContent="flex-start"
            alignSelf="center"
          >
            <Stack direction="column" w="full" space={6}>
              <Input
                InputLeftElement={
                  <Icon
                    as={<MaterialCommunityIcons name="email" size={32} />}
                    size={5}
                    ml="2"
                    color="muted.400"
                  />
                }
                placeholder="youremail@mail.com"
              />

              <Input
                InputLeftElement={
                  <Icon
                    as={<Entypo name="lock" size={32} />}
                    size={5}
                    ml="2"
                    color="muted.400"
                  />
                }
                placeholder="Password"
                secureTextEntry
              />
            </Stack>

            <VStack
              alignItems={'center'}
              w="full"
              position="absolute"
              bottom="30%"
            >
              <CustomButton name="Login" onPress={() => console.log('oi')} />

              <Flex direction="row" mt="1.5">
                <Text fontWeight="medium" mr="1.5">
                  Ainda não possui conta?
                </Text>

                <Text
                  fontWeight="medium"
                  color="sun.100"
                  underline
                  onPress={handleNavigateToSignUp}
                >
                  Crie uma aqui.
                </Text>
              </Flex>
            </VStack>
          </Center>
        </Box>
      </Box>
    </TouchableWithoutFeedback>
  );
}
