import React from "react";
import { Avatar } from "../Avatar";
import {
  View,
  Text
} from 'react-native';
import { styles } from "./styles";
export function Profile() {
  return (
    <View style={styles.container}>
      <Avatar
        urlImage={'https://avatars.githubusercontent.com/u/58981172?v=4'}
      />
      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>
            Olá,
          </Text>
          <Text style={styles.userName}>
            Lucas
          </Text>
        </View>
        <Text style={styles.message}>
          Hoje é dia de vitória!
        </Text>
      </View>

    </View>
  );
}