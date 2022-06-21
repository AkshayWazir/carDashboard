import React from 'react';
import {View} from 'react-native';
import Screen1 from './src/screens/screen1';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Dashboard" component={Screen1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
