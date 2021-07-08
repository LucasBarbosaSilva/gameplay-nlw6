import React, { ReactNode } from 'react';
import {
  ActivityIndicator,
  View,
} from 'react-native'
import { colors } from '../../global/styles/theme';

import { styles } from './styles';

export function Load() {

  return (
    <View style={styles.container}>
      <ActivityIndicator
        color={colors.primary}
        size="large"
      />
    </View>
  );
}