import { processFontFamily } from 'expo-font';
import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { colors, fonts } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    width: '100%',
    height: 234,
  },
  imageContent: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 24,
    marginBottom: 30
  },
  title: {
    fontSize: 28,
    color: colors.heading,
    fontFamily: fonts.title700,
  },
  subtitle: {
    fontSize: 13,
    color: colors.heading,
    lineHeight: 21,
    fontFamily: fonts.text400
  },
  members: {
    marginLeft: 24,
    marginTop: 27
  },
  footer: {
    paddingHorizontal: 24,
    paddingVertical: 20,
    marginBottom: getBottomSpace()
  }
})