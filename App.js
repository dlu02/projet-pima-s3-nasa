import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MenuScreen from './Menu';
import LoginScreen from './Login';
import SigninScreen from './Signin';
import GalerieScreen from './Galerie';
import FavorisScreen from './Favoris';
import TendancesScreen from './Tendances';


const Stack = createStackNavigator();

export default class App extends React.Component {
  
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{headerShown: false}}
          />
         <Stack.Screen
            name="Signin"
            component={SigninScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Menu"
            component={MenuScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Galerie"
            component={GalerieScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Favoris"
            component={FavorisScreen}
            options={{headerShown: false}}
          /> 
          <Stack.Screen
            name="Tendances"
            component={TendancesScreen}
            options={{headerShown: false}}
          />       
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
