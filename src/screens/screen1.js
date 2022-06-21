import React from 'react';
import {View, StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Frag1, Frag2, Frag3} from '../fragments';

const Tab = createMaterialTopTabNavigator();

export default function Screen1(props) {
  const styles = StyleSheet.create({
    mainCont: {
      height: '100%',
      width: '100%',
      backgroundColor: '#fff',
    },
  });

  return (
    <Tab.Navigator tabBarPosition="bottom">
      <Tab.Screen name="Home" component={Frag1} />
      <Tab.Screen name="info" component={Frag2} />
      <Tab.Screen name="navigation" component={Frag3} />
    </Tab.Navigator>
  );
}
