import React, { ReactNode, useState } from 'react';
import { Alert, KeyboardAvoidingView, Platform, ScrollView, Text, View } from 'react-native';
import uuid from 'react-native-uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { styles } from './styles';
import { colors } from '../../global/styles/theme';

import { Header } from '../../Components/Header';
import { Background } from '../../Components/Background';
import { CategorySelector } from '../../Components/CategorySelector';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { GuildIcon } from '../../Components/GuildIcon';
import { SmallInput } from '../../Components/SmallInput';
import { TextArea } from '../../Components/TextArea';
import { Button } from '../../Components/Button';
import { Verify } from 'crypto';
import { ModalView } from '../../Components/ModalView';
import { Guilds } from '../Guilds';
import { GuildProps } from '../../Components/Guild';

import { COLLECTION_APPOITMENTS } from '../../config/database';
import { useNavigation } from '@react-navigation/native';
import { catoegories } from '../../utils/categories';

interface Props {
  title: string,
  action?: ReactNode,
}



export function AppointmentCreate({ title, action, ...rest }: Props) {
  const [category, setCategory] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps);

  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [hour, setHour] = useState('');
  const [minute, setMinute] = useState('');
  const [description, setDescription] = useState('');

  const navigation = useNavigation();

  function handleGuilds() {
    setOpenModal(true);
  }

  function handleCloseGuilds() {
    setOpenModal(false)
  }

  function handleGuildSelected(guildSeletected: GuildProps) {
    setGuild(guildSeletected);
    setOpenModal(false);
  }

  function handleCategorySelect(categoryId: string) {
    setCategory(categoryId);
  }

  async function handleSave() {
    const listCategories = catoegories.map((item) => {
      return item.id;
    })

    if (category in listCategories) {
      const newAppointment = {
        id: uuid.v4(),
        guild,
        category,
        date: `${day}/${month} às ${hour}:${minute}`,
        description
      }

      const storage = await AsyncStorage.getItem(COLLECTION_APPOITMENTS)
      const appoitment = storage ? JSON.parse(storage) : [];

      await AsyncStorage.setItem(
        COLLECTION_APPOITMENTS,
        JSON.stringify([...appoitment, newAppointment])
      )

      navigation.goBack();
    } else {
      Alert.alert("Selecione uma categoria!")
    }




  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}

    >
      <Header
        title={'Agendar partida'}
      />
      <Background>
        <ScrollView>
          <Text style={[
            styles.label,
            { marginLeft: 24, marginTop: 32, marginBottom: 18 }
          ]}>
            Categorias
        </Text>

          <CategorySelector
            showCheck
            setCategory={handleCategorySelect}
            categorySlected={category}
          />

          <View style={styles.form}>
            <RectButton
              onPress={handleGuilds}
              {...rest}
            >
              <View style={styles.select}>
                {
                  guild.icon
                    ? <GuildIcon guildId={guild.id} iconId={guild.icon} />
                    : <View style={styles.image} />
                }

                <View style={styles.selectBody}>
                  <Text style={styles.label}>
                    {guild.name ? guild?.name : 'Selecione um servidor'}
                  </Text>
                </View>

                <Feather
                  name="chevron-right"
                  color={colors.heading}
                  size={18}
                />
              </View>
            </RectButton>

            <View style={styles.field}>
              <View>
                <Text style={[styles.label, { marginBottom: 15 }]}>
                  Dia e mês
              </Text>
                <View style={styles.column}>
                  <SmallInput
                    maxLength={2}
                    onChangeText={setDay}
                  />
                  <Text style={styles.divider}>
                    /
                </Text>
                  <SmallInput
                    maxLength={2}
                    onChangeText={setMonth}
                  />
                </View>
              </View>

              <View>
                <Text style={[styles.label, { marginBottom: 15 }]}>
                  Hora e Minuto
              </Text>
                <View style={styles.column}>
                  <SmallInput
                    maxLength={2}
                    onChangeText={setHour}
                  />
                  <Text style={styles.divider}>
                    :
                </Text>
                  <SmallInput
                    maxLength={2}
                    onChangeText={setMinute}
                  />
                </View>
              </View>
            </View>

            <View style={styles.field}>
              <Text style={[styles.label, { marginBottom: 12 }]}>
                Descrição
            </Text>

              <Text style={styles.caracteresLimit}>
                Max de 100 caracteres
            </Text>

            </View>

            <TextArea
              multiline
              maxLength={100}
              numberOfLines={5}
              autoCorrect={false}
              onChangeText={setDescription}
            />

            <View style={styles.footer}>
              <Button
                title={"Agendar"}
                onPress={handleSave}
              />
            </View>
          </View>
        </ScrollView>
      </Background>
      <ModalView
        visible={openModal}
        closeModal={handleCloseGuilds}
      >
        <Guilds
          handleGuildSelected={handleGuildSelected}
        />
      </ModalView>


    </KeyboardAvoidingView>
  );
}