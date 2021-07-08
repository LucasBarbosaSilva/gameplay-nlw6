import React, { useEffect, useState } from 'react';

import { FlatList, View } from 'react-native';
import { GuildProps } from '../../Components/Guild';
import { Guild } from '../../Components/Guild';
import { Load } from '../../Components/Load';
import { ListDivider } from '../../Components/ListDivider';

import { styles } from './styles';
import { api } from '../../server/api';

interface Props {
  handleGuildSelected: (guild: GuildProps) => void
}

export function Guilds({ handleGuildSelected }: Props) {
  const [guilds, setGuilds] = useState<GuildProps[]>([]);
  const [isLoad, setIsLoad] = useState(true);

  async function fecthGuilds() {
    const response = await api.get("/users/@me/guilds");

    setGuilds(response.data);
    setIsLoad(false);
  }

  useEffect(() => {
    fecthGuilds();
  }, [])

  return (
    <>
      {
        isLoad ? <Load />
          : <View style={styles.container}>
            <FlatList
              data={guilds}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => {
                return (<Guild
                  data={item}
                  onPress={() => handleGuildSelected(item)}
                />);
              }}
              ItemSeparatorComponent={() => <ListDivider isCentered={true} />}
              ListHeaderComponent={() => <ListDivider isCentered={true} />}
              showsHorizontalScrollIndicator={false}
              style={styles.guilds}
              contentContainerStyle={{ paddingBottom: 69, paddingTop: 104 }}
            />
          </View>}
    </>
  );
}