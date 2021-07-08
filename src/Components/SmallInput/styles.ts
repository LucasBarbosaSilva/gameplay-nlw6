import { colors, fonts } from './../../global/styles/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        width: 48,
        height: 48,
        backgroundColor: colors.secondary40,
        color: colors.heading,
        fontFamily: fonts.text400,
        borderRadius: 8,
        marginRight: 4,
        fontSize: 13,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: colors.secondary50
    },
})