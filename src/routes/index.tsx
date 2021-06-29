import React from 'react';

import { NavigationContainer } from '@react-navigation/native'
import { AuthRoutes } from './auth.routes';
import { Background } from '../Components/Background';


export function Routes() {
  return (

    <NavigationContainer>
      <AuthRoutes />
    </NavigationContainer>

  );
}