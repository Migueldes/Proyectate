import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Bienvenido from './Bienvenido';
import Cuestionario from './Cuestionario';
import Resultado from './Resultado';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Bienvenido">
        <Stack.Screen name="Bienvenido" component={Bienvenido} />
        <Stack.Screen name="Cuestionario" component={Cuestionario} />
        <Stack.Screen name="Resultado" component={Resultado} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}