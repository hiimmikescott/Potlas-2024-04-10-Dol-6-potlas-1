/*
* File: App.js
* Author: Szekeres Miklós
* Copyright: 2024, Szekeres Miklós
* Group: Szoft II/2
* Date: 2024.04.17
* Github: https://github.com/hiimmikescott
* Licenc: GNU GPL
*/

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import nevjegy from './nevjegy';
import versenyzok from './versenyzok';

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Versenyzök" component={versenyzok} />
        <Tab.Screen name="Névjegy" component={nevjegy} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}