import React, { ReactNode, useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import {
  Alert,
  FlatList,
  ImageBackground,
  Platform,
  Share,
  Text,
  View
} from 'react-native';
import * as Linking from 'expo-linking';

import { BorderlessButton } from 'react-native-gesture-handler';
import BannerImg from '../../assets/banner.png';

import { styles } from './styles';
import { colors } from '../../global/styles/theme';

import { AppointmentsProps } from '../../Components/Appointment';
import { Header } from '../../Components/Header';
import { Fontisto } from '@expo/vector-icons';
import { ListHeader } from '../../Components/ListHeader';
import { Member, MemberProps } from '../../Components/Member';
import { ListDivider } from '../../Components/ListDivider';
import { ButtonIcon } from '../../Components/ButtonIcon';
import { api } from '../../server/api';
import { Load } from '../../Components/Load';

interface Props {
  title: string,
  action?: ReactNode,
}

interface Params {
  guildSelected: AppointmentsProps;
}

interface ParamsWidget {
  id: string,
  instant_invite: string,
  members: MemberProps[],
}



export function AppointmentDetails({ title, action }: Props) {
  const { secondary100, secondary40, heading } = colors;
  const [widget, setWidget] = useState<ParamsWidget>({} as ParamsWidget);
  const [isWidgetAble, setIsWidgetAble] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const route = useRoute();
  const { guildSelected } = route.params as Params;

  function openExternalLinking() {
    Linking.openURL(widget.instant_invite);
  }

  function handleShareInvite() {
    const message = (Platform.OS === 'ios')
      ? `Junte-se a ${guildSelected.guild.name}`
      : `${guildSelected.description} \nJunte-se a nós! ${widget.instant_invite}`;


    Share.share({
      message,
      url: widget.instant_invite
    });
  }

  async function fetchWidgetInfo() {
    try {
      const response = await api.get(`/guilds/${guildSelected.guild.id}/widget.json`);
      setWidget(response.data);

    } catch (error) {
      Alert.alert("", "Será que o Widget está habilitado? Não é possível acessar detalhes da partida com o widget desabilitado.");
      setIsWidgetAble(false)
      return
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchWidgetInfo();
  }, []);

  return (
    <View style={styles.container}>
      <Header
        title={'Detalhes'}
        action={
          guildSelected.guild.owner &&
          <BorderlessButton
            onPress={handleShareInvite}
          >
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
            {guildSelected.guild.name}
          </Text>
          <Text style={styles.subtitle}>
            {guildSelected.description}
          </Text>
        </View>
      </ImageBackground>
      {
        isLoading ? <Load /> :
          isWidgetAble ?
            <>
              <ListHeader
                title={'Jogadores'}
                subtitle={`Total de jogadores: ${widget.members.length}`}
              />

              <FlatList
                data={widget.members}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <Member
                    data={item}
                  />
                )}
                ItemSeparatorComponent={() => <ListDivider isCentered />}
                style={styles.members}
              />
            </>
            : <></>
      }


      {
        guildSelected.guild.owner &&
        <View style={styles.footer}>
          <ButtonIcon
            onPress={openExternalLinking}
            title={'Entrar na partida'}
          />
        </View>
      }
    </View>
  );
}