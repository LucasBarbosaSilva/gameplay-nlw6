import React from "react";

import {
  Image, View,

} from 'react-native';

const { CDN_IMAGE } = process.env;

import DiscordImg from '../../assets/discord.svg';

import { styles } from "./styles";

type Props = {
  guildId: string,
  iconId: string

}

export function GuildIcon({ guildId, iconId }: Props) {
  const uri = `${CDN_IMAGE}/icons/${guildId}/${iconId}.png`

  return (
    <View style={styles.container}>
      {
        iconId
          ?
          <Image
            style={styles.image}
            source={{ uri }}
            resizeMode={'cover'}
          />
          :
          <DiscordImg
            height={40}
            width={40}
          />
      }
    </View>
  );
}