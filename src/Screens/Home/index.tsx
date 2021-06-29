import React, { useState } from "react";
import {
  FlatList,
  Text,
  View
} from 'react-native'
import { styles } from "./styles";

import { Profile } from "../../Components/Profile";
import { ButtonAdd } from "../../Components/ButtonAdd";
import { CategorySelector } from "../../Components/CategorySelector";
import { ListHeader } from "../../Components/ListHeader";
import { Appointments } from "../../Components/Appointment";
import { ListDivider } from "../../Components/ListDivider";

export function Home() {
  const [categoy, setCategory] = useState('');

  const appointments = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true,
      },
      category: '1',
      date: '22/05 às 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    },
    {
      id: '2',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true,
      },
      category: '1',
      date: '22/05 às 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    },
    {
      id: '3',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true,
      },
      category: '1',
      date: '22/05 às 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    }
  ]

  function handleCategorySelect(categoryId: string) {
    categoryId === categoy ? setCategory('') : setCategory(categoryId);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
      </View>
      <View >
        <CategorySelector
          categorySlected={categoy}
          setCategory={handleCategorySelect}
        />
        <View style={styles.content}>
          <ListHeader
            title="Partidas agendadas"
            subtitle="Total 6"
          />

          <FlatList
            data={appointments}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <Appointments data={item} />
            )}
            style={styles.maches}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <ListDivider />}

          />
        </View>
      </View>
    </View>
  )
}