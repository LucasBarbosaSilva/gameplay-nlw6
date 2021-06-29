import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  Image,
  StatusBar
} from 'react-native';

import IllustrationImg from '../../assets/illustration.png';
import { ButtonIcon } from '../../Components/ButtonIcon';
import { styles } from './style';

export function Signin() {
  const navigation = useNavigation();

  function handleSignin() {
    navigation.navigate("Home")
  }

  return (
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

        <ButtonIcon
          title="Entrar no Discord"
          onPress={handleSignin}
        />
      </View>

    </View>

  );
}