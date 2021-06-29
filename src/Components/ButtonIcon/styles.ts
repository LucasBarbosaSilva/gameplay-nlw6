import { colors } from './../../global/styles/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 56,
        backgroundColor: colors.primary,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconWrapper: {
        width: 56,
        height: 56,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1,
        borderColor: colors.line

    },
    icon: {

    },
    title: {
        flex: 1,
        color: colors.heading,
        fontSize: 15,
        textAlign: 'center'
    }
})