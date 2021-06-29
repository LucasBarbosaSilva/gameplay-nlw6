import { StyleSheet } from "react-native";
import { colors, fonts } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  user: {
    flexDirection: 'row',
  },
  greeting: {
    fontFamily: fonts.title500,
    color: colors.heading,
    fontSize: 24,
    marginRight: 6
  },
  userName: {
    fontFamily: fonts.title700,
    color: colors.heading,
    fontSize: 24,

  },
  message: {
    fontFamily: fonts.text400,
    color: colors.highlight,

  }

})