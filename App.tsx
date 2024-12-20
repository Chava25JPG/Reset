import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importar las screens
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
import TarjetaNueva from './Screens/TarjetaNueva'; // Pantalla opcional de pago

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Bienvenida" screenOptions={{ headerShown: false }}>
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
    </NavigationContainer>
  );
};

export default App;
