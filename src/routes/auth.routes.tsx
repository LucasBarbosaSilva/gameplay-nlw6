import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../Screens/Home';
import { Signin } from '../Screens/Signin';
import { colors } from '../global/styles/theme';
import { AppointmentDetails } from '../Screens/AppointmentDetails';
import { AppointmentCreate } from '../Screens/AppointmentCreate';
import { Guilds } from '../Screens/Guilds';


const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator
      headerMode='none'
      screenOptions={{
        cardStyle: {
          backgroundColor: colors.secondary100
        }
      }}
    >
      <Screen
        name="Signin"
        component={Signin}
      />

      <Screen
        name="Home"
        component={Home}
      />
      <Screen
        name="AppointmentDetails"
        component={AppointmentDetails}
      />
      <Screen
        name="AppointmentCreate"
        component={AppointmentCreate}
      />
      <Screen
        name="Guilds"
        component={Guilds}
      />
    </Navigator>
  );
}