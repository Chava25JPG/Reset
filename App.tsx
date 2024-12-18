/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Bienvenida from './Screens/HomeLog'; // Ajusta la ruta según tu estructura de archivos
import RegistroMovil from './Screens/RegistroMovil';
import EntrarMovil from './Screens/EntrarMovil';
import Inicio from './Screens/Inicio';
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Bienvenida" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Bienvenida" component={Bienvenida} />
        <Stack.Screen name="RegistroMovil" component={RegistroMovil} />
        <Stack.Screen name="EntrarMovil" component={EntrarMovil} options={{ title: 'Entrar' }} />
        <Stack.Screen name="Home" component={Inicio} options={{ title: 'Inicio' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;