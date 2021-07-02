import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { colors, fonts } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    fontFamily: fonts.title700,
    color: colors.heading,
    fontSize: 18
  },
  status: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameStatus: {
    fontFamily: fonts.text400,
    color: colors.highlight,
    fontSize: 13
  },
  bulletStatus: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 9
  },
})