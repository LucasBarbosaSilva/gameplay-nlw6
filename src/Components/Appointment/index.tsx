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

export interface GuildProps {
  id: string,
  name: string,
  icon: null,
  owner: boolean
}

export interface AppointmentsProps {
  id: string,
  guild: GuildProps,
  category: string,
  date: string,
  description: string
}

interface Props extends RectButtonProps {
  data: AppointmentsProps
}

import { styles } from "./styles";
import { colors } from "../../global/styles/theme";

export function Appointments({ data, ...rest }: Props) {
  const [category] = catoegories.filter(item => item.id == data.category);
  const { owner } = data.guild;
  const { primary, on } = colors;

  return (
    <RectButton {...rest}>
      <View style={styles.container}>
        <GuildIcon />

        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>
              {data.guild.name}
            </Text>
            <Text style={styles.category}>
              {category.title}
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
                {owner ? 'Anfitrião' : 'Visitante'}
              </Text>
            </View>
          </View>

        </View>
      </View>
    </RectButton>
  );
}