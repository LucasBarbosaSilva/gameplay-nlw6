import { colors } from './../../global/styles/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: colors.overlay,
  },
  container: {
    flex: 1,
    marginTop: 100
  },
  bar: {
    width: 39,
    height: 2,
    borderRadius: 2,
    backgroundColor: colors.secondary30,
    alignSelf: 'center',
    marginTop: 13,
  }
})