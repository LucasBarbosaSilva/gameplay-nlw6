import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  label: {
    fontSize: 18,
    fontFamily: fonts.title700,
    color: colors.heading
  },
  form: {
    paddingHorizontal: 24,
    marginTop: 32,
  },
  select: {
    flexDirection: 'row',
    width: '100%',
    height: 68,
    borderColor: colors.secondary50,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
    paddingRight: 25,
    overflow: 'hidden',

  },
  selectBody: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: 64,
    height: 68,
    backgroundColor: colors.secondary40,
    borderColor: colors.secondary50,
    borderWidth: 1,
    borderRadius: 8,
  },
  field: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: 30
  },
  column: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  divider: {
    fontSize: 15,
    fontFamily: fonts.text500,
    color: colors.highlight,
    marginRight: 4
  },
  caracteresLimit: {
    fontSize: 13,
    fontFamily: fonts.text400,
    color: colors.highlight
  },
  footer: {
    marginVertical: 20,
    marginBottom: 56
  }



})