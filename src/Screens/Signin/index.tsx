import React from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  Alert,
  ActivityIndicator
} from 'react-native';

import IllustrationImg from '../../assets/illustration.png';
import { Background } from '../../Components/Background';
import { ButtonIcon } from '../../Components/ButtonIcon';
import { colors } from '../../global/styles/theme';

import { useAuth } from '../../hooks/auth';

import { styles } from './style';

export function Signin() {


  const { isLoading, signIn } = useAuth();

  async function handleSignin() {
    try {
      await signIn();
    } catch (error) {
      Alert.alert(error);
    }
  }

  return (
    <Background>

      <View style={styles.container}>
        <Image
          source={IllustrationImg}
          style={styles.image}
          resizeMode={'stretch'}
        />

        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se {'\n'}
          e organize suas  {'\n'}
          jogatinas {'\n'}
          </Text>

          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games {'\n'}
          favoritos com os seus amigos.
        </Text>

          {
            isLoading ? <ActivityIndicator color={colors.primary} /> :
              <ButtonIcon
                title="Entrar no Discord"
                onPress={handleSignin}
              />
          }
        </View>
      </View>
    </Background>

  );
}