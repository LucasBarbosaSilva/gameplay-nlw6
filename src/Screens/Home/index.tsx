import React, { useCallback, useState } from "react";
import {
  FlatList,
  Text,
  View,
  ScrollView,
} from 'react-native';

import { useFocusEffect, useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { styles } from "./styles";

import { Profile } from "../../Components/Profile";
import { ButtonAdd } from "../../Components/ButtonAdd";
import { CategorySelector } from "../../Components/CategorySelector";
import { ListHeader } from "../../Components/ListHeader";
import { Appointments, AppointmentsProps } from "../../Components/Appointment";
import { ListDivider } from "../../Components/ListDivider";
import { Background } from "../../Components/Background";
import { useAuth } from "../../hooks/auth";
import { COLLECTION_APPOITMENTS } from "../../config/database";
import { Load } from "../../Components/Load";


export function Home() {
  const [category, setCategory] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [appointments, setAppointments] = useState<AppointmentsProps[]>([]);

  const navigate = useNavigation()

  function handleAppoitmentDetails(guildSelected: AppointmentsProps) {
    navigate.navigate("AppointmentDetails", { guildSelected });
  }

  function handleAppoitmentCreate() {
    navigate.navigate("AppointmentCreate");
  }

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  async function fetchAppointments() {
    const storage = await AsyncStorage.getItem(COLLECTION_APPOITMENTS);
    const newAppointments: AppointmentsProps[] = storage ? JSON.parse(storage) : [];

    if (category) {
      setAppointments(newAppointments.filter(item => item.category === category));
    } else {
      setAppointments(newAppointments);
    }

    setIsLoading(false);
  }

  useFocusEffect(useCallback(() => {
    fetchAppointments()
  }, [category]));

  return (
    <Background>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd onPress={handleAppoitmentCreate} />
      </View>

      <CategorySelector
        categorySlected={category}
        setCategory={handleCategorySelect}
      />

      {
        isLoading ? <Load /> :
          <>
            <ListHeader
              title="Partidas agendadas"
              subtitle={`Total de ${appointments.length}`}
            />

            <FlatList
              data={appointments}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <Appointments
                  data={item}
                  navigaton={() => handleAppoitmentDetails(item)}
                />
              )}
              style={styles.maches}
              showsVerticalScrollIndicator={false}
              ItemSeparatorComponent={() => <ListDivider />}
              contentContainerStyle={{ paddingBottom: 69 }}
            />
          </>
      }
    </Background>
  )
}