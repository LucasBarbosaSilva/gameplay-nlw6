import React, { ReactNode } from 'react';

import { Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Background } from '../../Components/Background';

import { styles } from './styles';
import { colors } from '../../global/styles/theme';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

interface Props {
  title: string,
  action?: ReactNode,
}



export function Header({ title, action }: Props) {
  const { secondary100, secondary40, heading } = colors;
  const navigate = useNavigation();

  function handleGoBack() {
    navigate.goBack();
  }

  return (
    <LinearGradient
      colors={[secondary100, secondary40]}
      style={styles.container}
    >
      <BorderlessButton
        onPress={handleGoBack}
      >
        <Feather
          name="arrow-left"
          size={24}
          color={heading}
        />
      </BorderlessButton>

      <Text style={styles.title}>
        {title}
      </Text>

      {
        action
          ? <View>
            {action}
          </View>
          : <View style={{ width: 24 }} />
      }
    </LinearGradient>
  );
}