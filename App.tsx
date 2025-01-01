// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerActions } from '@react-navigation/native';

// Importar tus pantallas:
import Bienvenida from './Screens/HomeLog'; 
import RegistroMovil from './Screens/RegistroMovil';
import EntrarMovil from './Screens/EntrarMovil';
import Inicio from './Screens/Inicio';
import Servicios from './Screens/Servicios';
import Reserva from './Screens/Reserva';
import DuracionMasaje from './Screens/DuracinMasaje';
import Terapeutas from './Screens/Terapeutas';
import Calendario from './Screens/Calendario';
import ConfirmacionDePedido from './Screens/ConfirmacionDePedido';
import PagoExitoso from './Screens/PagoExitoso';
import TarjetaNueva from './Screens/TarjetaNueva';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

/**
 * Stack principal con todas tus pantallas
 */
function MainStack() {
  return (
    <Stack.Navigator 
      initialRouteName="Bienvenida" 
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Bienvenida" component={Bienvenida} />
      <Stack.Screen name="RegistroMovil" component={RegistroMovil} />
      <Stack.Screen name="EntrarMovil" component={EntrarMovil} />
      <Stack.Screen name="Home" component={Inicio} />
      <Stack.Screen name="Servicios" component={Servicios} />
      <Stack.Screen name="Reserva" component={Reserva} />
      <Stack.Screen name="DuracionMasaje" component={DuracionMasaje} />
      <Stack.Screen name="Terapeutas" component={Terapeutas} />
      <Stack.Screen name="Calendario" component={Calendario} />
      <Stack.Screen name="ConfirmacionDePedido" component={ConfirmacionDePedido} />
      <Stack.Screen name="PagoExitoso" component={PagoExitoso} />
      <Stack.Screen name="TarjetaNueva" component={TarjetaNueva} />
    </Stack.Navigator>
  );
}

/**
 * Drawer que envuelve tu Stack.
 * Aquí, "MainStack" es una de las pantallas de Drawer para que
 * puedas llamar toggleDrawer() desde cualquier pantalla incluida.
 */
function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        // Opcional: estilos o props de Drawer
        screenOptions={{ headerShown: false }}
      >
        {/*
          Para que funcione toggleDrawer(), "MainStack" debe ser
          hijo directo (o nieto) del Drawer.Navigator
        */}
        <Drawer.Screen 
          name="MainStack" 
          component={MainStack}
          options={{ drawerLabel: 'Pantallas Principales' }}
        />
        
        {/* 
          Opcionalmente, puedes agregar más pantallas directamente 
          al Drawer si lo deseas, por ejemplo: 
        */}
        {/* 
        <Drawer.Screen
          name="OtraPantalla"
          component={OtraPantalla}
          options={{ drawerLabel: 'Otra Pantalla' }}
        /> 
        */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
