import { StyleSheet } from "react-native";
import { colors, fonts } from "../../global/styles/theme";


export const styes = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: 8,
    height: 48,
    width: 48,
    fontFamily: fonts.text500,
    fontSize: 15
  }
})