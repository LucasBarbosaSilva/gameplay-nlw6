import React from "react";

import {
  View,
  Text
} from 'react-native';
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { catoegories } from "../../utils/categories";
import { GuildIcon } from "../GuildIcon";

import PlayerSvg from '../../assets/player.svg';
import CalendarSvg from '../../assets/calendar.svg';

interface GuildProps {
  id: string,
  name: string,
  icon: string,
  owner: boolean
}

export interface AppointmentsProps {
  id: string,
  guild: GuildProps,
  category?: string,
  date: string,
  description: string
}

interface Props extends RectButtonProps {
  data: AppointmentsProps,
  navigaton: () => void,
}

import { styles } from "./styles";
import { colors } from "../../global/styles/theme";
import { LinearGradient } from "expo-linear-gradient";

export function Appointments({ data, navigaton, ...rest }: Props) {
  const [category] = catoegories.filter(item => item.id == data.category);
  const { owner } = data.guild;
  const { primary, on, secondary50, secondary70 } = colors;

  return (
    <RectButton
      onPress={navigaton}
      {...rest}
    >
      <View style={styles.container}>
        <LinearGradient
          colors={[secondary50, secondary70]}
          style={styles.guildIconContainer}
        >
          <GuildIcon guildId={data.guild.id} iconId={data.guild.icon} />
        </LinearGradient>
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>
              {data.guild.name}
            </Text>
            <Text style={styles.category}>
              {category ? category.title : "Sem categoria"}
            </Text>
          </View>

          <View style={styles.footer}>
            <View style={styles.dateinfo}>
              <CalendarSvg />

              <Text style={styles.date}>
                {data.date}
              </Text>
            </View>

            <View style={styles.playerInfo}>
              <PlayerSvg fill={owner ? primary : on} />

              <Text style={[
                styles.player,
                { color: owner ? primary : on }
              ]}>
                {owner ? 'Anfitri??o' : 'Visitante'}
              </Text>
            </View>
          </View>

        </View>
      </View>
    </RectButton>
  );
}