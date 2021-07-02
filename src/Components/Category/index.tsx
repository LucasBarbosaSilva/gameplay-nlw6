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
  checked: boolean,
  showCheck?: boolean
}

export function Category({
  title,
  icon: Icon,
  checked,
  showCheck = false,
  ...rest
}: Props) {
  const { secondary40, secondary50, secondary70, secondary85 } = colors;
  return (
    <View>
      <RectButton {...rest}>
        <LinearGradient
          style={styles.container}
          colors={[secondary50, secondary70]}
        >

          <LinearGradient
            style={[styles.content, { opacity: checked ? 1 : 0.5 }]}
            colors={[checked ? secondary85 : secondary50, secondary40]}
          >

            {showCheck && <View style={checked ? styles.checked : styles.check} />}
            <Icon
              width={48}
              height={48}
            />

            <Text style={styles.title}>
              {title}
            </Text>

          </LinearGradient>
        </LinearGradient>
      </RectButton>

    </View>
  );
}