import { StyleSheet } from "react-native";
import { colors, fonts } from "../../global/styles/theme";


export const styles = StyleSheet.create({
  container: {
    width: 104,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginRight: 8
  },
  content: {
    width: 100,
    height: 116,
    backgroundColor: colors.secondary40,
    borderRadius: 8,
    justifyContent: "space-between",
    alignItems: 'center',
    paddingVertical: 7,
  },
  title: {
    fontFamily: fonts.text500,
    color: colors.heading,
    fontSize: 15
  },
  check: {
    width: 12,
    height: 12,
    backgroundColor: colors.secondary100,
    alignSelf: 'flex-end',
    marginRight: 7,
    borderColor: colors.secondary50,
    borderWidth: 2,
    borderRadius: 3,
  },
  checked: {
    width: 10,
    height: 10,
    backgroundColor: colors.primary,
    alignSelf: 'flex-end',
    marginRight: 7,
    borderRadius: 3,
  }

})