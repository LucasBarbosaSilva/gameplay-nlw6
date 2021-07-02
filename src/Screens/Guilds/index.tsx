import React from 'react';

import { FlatList, View } from 'react-native';
import { GuildProps } from '../../Components/Guild';
import { Guild } from '../../Components/Guild';
import { ListDivider } from '../../Components/ListDivider';

import { styles } from './styles';

interface Props {
  handleGuildSelected: (guild: GuildProps) => void
}

export function Guilds({ handleGuildSelected }: Props) {
  const guilds = [
    {
      id: '1',
      name: 'Lendários',
      icon: "null",
      owner: true
    },
    {
      id: '2',
      name: 'Justiceiros',
      icon: "null",
      owner: true
    }
  ]

  return (
    <View style={styles.container}>
      <FlatList
        data={guilds}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (<Guild
            data={item}
            onPress={() => handleGuildSelected(item)}
          />);
        }}
        ItemSeparatorComponent={() => <ListDivider />}
        style={styles.guilds}

      />
    </View>
  );
}