import { fonts, colors } from './../../global/styles/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 24
    },
    content: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontFamily: fonts.title700,
        color: colors.heading,
        fontSize: 18,
        marginBottom: 11
    },
    type: {
        fontFamily: fonts.text400,
        color: colors.highlight,
        fontSize: 13,
        marginBottom: 24
    }
})