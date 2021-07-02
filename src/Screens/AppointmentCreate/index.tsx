import React, { ReactNode, useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

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


interface Props {
  title: string,
  action?: ReactNode,
}



export function AppointmentCreate({ title, action, ...rest }: Props) {
  const [category, setCategory] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps);

  function handleGuilds() {
    setOpenModal(true)
  }

  function handleGuildSelected(guildSeletected: GuildProps) {
    setGuild(guildSeletected);
    setOpenModal(false);
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}

    >
      <Background>
        <Header
          title={'Agendar partida'}
        />

        <ScrollView>
          <Text style={[
            styles.label,
            { marginLeft: 24, marginTop: 32, marginBottom: 18 }
          ]}>
            Categorias
          </Text>

          <CategorySelector
            showCheck
            setCategory={setCategory}
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
                    ? <GuildIcon />
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
                  />
                  <Text style={styles.divider}>
                    /
                  </Text>
                  <SmallInput
                    maxLength={2}
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
                  />
                  <Text style={styles.divider}>
                    :
                  </Text>
                  <SmallInput
                    maxLength={2}
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
            />

            <View style={styles.footer}>
              <Button
                title={"Agendar"}
              />
            </View>
          </View>
        </ScrollView>
        <ModalView visible={openModal}>
          <Guilds
            handleGuildSelected={handleGuildSelected}
          />
        </ModalView>

      </Background>
    </KeyboardAvoidingView>
  );
}