import { colors } from './../../global/styles/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 12,
        backgroundColor: colors.secondary80
    },
    guilds: {
        width: '100%',
        marginTop: 24
    }
})