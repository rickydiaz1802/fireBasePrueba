import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()

import usuariosLista from './pantallas/usuariosLista';
import crearUsuario from './pantallas/crearUsuario';
import detalleUsuario from './pantallas/detalleUsuario';

function MyStack(){
return(
  <Stack.Navigator>
    
    <Stack.Screen name ="crearUsuario" component={crearUsuario}/>
    <Stack.Screen name="usuariosLista" component={usuariosLista}/>
    <Stack.Screen name ="detalleUsuario"component={detalleUsuario}/> 
  </Stack.Navigator>
)
}

export default function App() {
  return (
    <NavigationContainer>
  
      <MyStack/>
    </NavigationContainer>
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
