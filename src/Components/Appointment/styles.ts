import { StyleSheet } from "react-native";
import { colors, fonts } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    flex: 1
  },
  header: {
    width: "100%",
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12
  },
  title: {
    fontFamily: fonts.title700,
    color: colors.heading,
    fontSize: 18
  },
  category: {
    fontFamily: fonts.text400,
    color: colors.highlight,
    fontSize: 13,
  },
  footer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  dateinfo: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  playerInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  date: {
    fontFamily: fonts.title500,
    color: colors.heading,
    fontSize: 13,
    marginLeft: 7,
  },
  player: {
    fontFamily: fonts.text500,
    fontSize: 13,
    marginLeft: 7,
  }
})