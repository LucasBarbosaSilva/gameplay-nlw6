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
    justifyContent: "space-around",
    alignItems: 'center',
    paddingVertical: 20,
  },
  title: {
    fontFamily: fonts.title700,
    color: colors.heading,
    fontSize: 15,
    marginTop: 19
  },
  check: {
    position: 'absolute',
    top: 7,
    right: 7,
    width: 12,
    height: 12,
    backgroundColor: colors.secondary100,
    borderColor: colors.secondary50,
    borderWidth: 2,
    borderRadius: 3,
  },
  checked: {
    position: 'absolute',
    top: 7,
    right: 7,
    width: 10,
    height: 10,
    backgroundColor: colors.primary,
    borderRadius: 3,
  }

})