import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../../global/styles/theme';
import { styes } from './styles';


export function ButtonAdd({ ...rest }: RectButtonProps) {
    return (
        <RectButton
            style={styes.container}
        >
            <MaterialCommunityIcons
                name="plus"
                color={colors.heading}
                size={24}
            />
        </RectButton>
    )
}