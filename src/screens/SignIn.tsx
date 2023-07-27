import { TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import * as Nb from 'native-base';
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';

import backImg from '../assets/back-image.png';

import { Input } from '../components/Form/Input';
import { CustomButton } from '../components/Form/Button';
import { useAuthNavigation } from '../hooks/useNavigation';
import { useState } from 'react';

export function SignIn() {
  const authNavigation = useAuthNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSignIn() {
    try {
      if (!email && !password) {
        await signInWithEmailAndPassword(auth, email, password);

        authNavigation.navigate('App');
        Alert.alert('Login sucess');
      }

      authNavigation.navigate('App');
    } catch (error) {
      Alert.alert('Login error', error);
    }
  }

  function handleNavigateToSignUp() {
    authNavigation.navigate('SignUp');
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Nb.Box flex={1}>
        <Nb.Image
          source={backImg}
          alt="imagem de background"
          resizeMode="cover"
          w="full"
        />

        <Nb.Box
          bg="white"
          w="full"
          h="full"
          borderTopLeftRadius="60"
          position="absolute"
          top="1/3"
        >
          <Nb.Center mt="10">
            <Nb.Heading size="xl" color="sun.100">
              Sign In
            </Nb.Heading>
          </Nb.Center>

          <Nb.Center
            h="60%"
            w="80%"
            mt={12}
            justifyContent="flex-start"
            alignSelf="center"
          >
            <Nb.Stack direction="column" w="full" space={6}>
              <Input
                InputLeftElement={
                  <Nb.Icon
                    as={<MaterialCommunityIcons name="email" size={32} />}
                    size={5}
                    ml="2"
                    color="muted.400"
                  />
                }
                value={email}
                onChangeText={setEmail}
                placeholder="youremail@mail.com"
              />

              <Input
                InputLeftElement={
                  <Nb.Icon
                    as={<Entypo name="lock" size={32} />}
                    size={5}
                    ml="2"
                    color="muted.400"
                  />
                }
                value={password}
                onChangeText={setPassword}
                placeholder="Password"
                secureTextEntry
              />
            </Nb.Stack>

            <Nb.VStack
              alignItems={'center'}
              w="full"
              position="absolute"
              bottom="30%"
            >
              <CustomButton name="Entrar" onPress={handleSignIn} />

              <Nb.Flex direction="row" mt="1.5">
                <Nb.Text fontWeight="medium" mr="1.5">
                  Ainda não possui conta?
                </Nb.Text>

                <Nb.Text
                  fontWeight="medium"
                  color="sun.100"
                  underline
                  onPress={handleNavigateToSignUp}
                >
                  Crie uma aqui.
                </Nb.Text>
              </Nb.Flex>
            </Nb.VStack>
          </Nb.Center>
        </Nb.Box>
      </Nb.Box>
    </TouchableWithoutFeedback>
  );
}
