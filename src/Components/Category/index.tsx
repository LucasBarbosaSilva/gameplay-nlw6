import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { SvgProps } from 'react-native-svg';
import { colors } from '../../global/styles/theme';

import { styles } from './styles';

interface Props extends RectButtonProps {
  title: String,
  icon: React.FC<SvgProps>,
  checked: boolean
}

export function Category({
  title,
  icon: Icon,
  checked,
  ...rest
}: Props) {
  const { secondary50, secondary70 } = colors;
  return (
    <View>
      <RectButton {...rest}>
        <LinearGradient
          style={styles.container}
          colors={[secondary50, secondary70]}
        >
          <View style={[styles.content, { opacity: checked ? 1 : 0.4 }]}>
            <View style={checked ? styles.checked : styles.check} />
            <Icon
              width={48}
              height={48}
            />

            <Text style={styles.title}>
              {title}
            </Text>

          </View>
        </LinearGradient>
      </RectButton>

    </View>
  );
}