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
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />


      <Image
        source={IllustrationImg}
        style={styles.image}
        resizeMode={'stretch'}
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Organize  {'\n'}
          suas jogatinas {'\n'}
          facilmente {'\n'}
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {'\n'}
          favoritos com os seus amigos.
        </Text>

        <ButtonIcon
          title="Entrar no Discord"
          activeOpacity={0.8}
        />
      </View>

    </View>

  );
}