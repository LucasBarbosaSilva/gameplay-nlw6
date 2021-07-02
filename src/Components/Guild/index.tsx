import { Feather } from '@expo/vector-icons';
import React from 'react';

import { Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import { colors } from '../../global/styles/theme';
import { GuildIcon } from '../GuildIcon';

import { styles } from './styles';

export interface GuildProps {
    id: string,
    name: string,
    icon: string,
    owner: boolean
}

interface Props extends TouchableOpacityProps {
    data: GuildProps
}

export function Guild({ data, ...rest }: Props) {
    return (
        <TouchableOpacity
            style={styles.container}
            activeOpacity={0.7}
            {...rest}
        >
            <GuildIcon />

            <View style={styles.content}>
                <View>
                    <Text style={styles.title}>
                        {data.name}
                    </Text>

                    <Text style={styles.type}>
                        {data.owner ? "Administrador" : "Covidado"}
                    </Text>
                </View>
            </View>
            <Feather
                name='chevron-right'
                color={colors.heading}
                size={24}
            />
        </TouchableOpacity>
    );
}