import React, { ReactNode } from 'react';
import { FlatList, ImageBackground, Text, View } from 'react-native';

import { BorderlessButton } from 'react-native-gesture-handler';
import BannerImg from '../../assets/banner.png';

import { styles } from './styles';
import { colors } from '../../global/styles/theme';

import { Header } from '../../Components/Header';
import { Fontisto } from '@expo/vector-icons';
import { ListHeader } from '../../Components/ListHeader';
import { Member } from '../../Components/Member';
import { ListDivider } from '../../Components/ListDivider';
import { ButtonIcon } from '../../Components/ButtonIcon';

interface Props {
  title: string,
  action?: ReactNode,
}



export function AppointmentDetails({ title, action }: Props) {
  const { secondary100, secondary40, heading } = colors;

  const members = [
    {
      id: '1',
      username: 'Lucas',
      avatar_url: 'https://github.com/lucasbarbosasilva.png',
      status: 'online'
    },
    {
      id: '2',
      username: 'Lucas',
      avatar_url: 'https://github.com/lucasbarbosasilva.png',
      status: 'offline'
    },
    {
      id: '3',
      username: 'Lucas',
      avatar_url: 'https://github.com/lucasbarbosasilva.png',
      status: 'online'
    }
  ]
  return (
    <View style={styles.container}>
      <Header
        title={'Detalhes'}
        action={
          <BorderlessButton>
            <Fontisto
              name="share"
              size={24}
              color={colors.primary}
            />
          </BorderlessButton>
        }
      />

      <ImageBackground
        source={BannerImg}
        style={styles.image}
      >
        <View style={styles.imageContent}>
          <Text style={styles.title}>
            Lendários
          </Text>
          <Text style={styles.subtitle}>
            É hoje que vamos gahar o desafio sem preder nenhum desafio da md10.
          </Text>
        </View>
      </ImageBackground>

      <ListHeader
        title={'Jogadores'}
        subtitle={'Total de jogadores'}
      />

      <FlatList
        data={members}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Member
            data={item}
          />
        )}
        ItemSeparatorComponent={() => <ListDivider />}
        style={styles.members}
      />

      <View style={styles.footer}>
        <ButtonIcon
          title={'Entrar na partida'}
        />
      </View>
    </View>
  );
}