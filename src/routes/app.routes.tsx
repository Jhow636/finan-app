import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Registers from '../pages/Registers';
import CustomDrawer from '../components/CustomDrawer';
const AppDrawer = createDrawerNavigator();

export default function AppRoutes() {
  return (
    <AppDrawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,

        drawerStyle: {
          backgroundColor: '#fff',
          paddingTop: 20,
        },

        drawerActiveBackgroundColor: '#3b3dbf',
        drawerActiveTintColor: '#fff',

        drawerInactiveTintColor: '#121212',
        drawerInactiveBackgroundColor: '#f0f2ff',
      }}>
      <AppDrawer.Screen name="Home" component={Home} />
      <AppDrawer.Screen name="Registrar" component={Registers} />
      <AppDrawer.Screen name="Perfil" component={Profile} />
    </AppDrawer.Navigator>
  );
}
