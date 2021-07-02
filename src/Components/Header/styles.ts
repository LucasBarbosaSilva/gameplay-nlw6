import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 104,
        paddingTop: getStatusBarHeight(),
        flexDirection: 'row',
        paddingHorizontal: 24,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        flex: 1,
        textAlign: 'center',
        fontFamily: fonts.title700,
        fontSize: 20,
        color: colors.heading,
    }
})