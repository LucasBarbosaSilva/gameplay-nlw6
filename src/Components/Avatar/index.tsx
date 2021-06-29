import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "react-native";

import { styles } from "./style";
import { colors } from "../../global/styles/theme";

type Props = {
  urlImage: string
}

export function Avatar({ urlImage }: Props) {
  const { secondary70, secondary50 } = colors;

  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary50, secondary70]}
    >
      <Image
        source={{ uri: urlImage }}
        style={styles.image}
      />
    </LinearGradient>
  )
}