import React from 'react';
import {View, StyleSheet} from 'react-native';

export default function Frag1(props) {
  const styles = StyleSheet.create({
    mainCont: {
      height: '100%',
      width: '100%',
      backgroundColor: '#00ff00',
    },
  });
  return <View style={styles.mainCont}></View>;
}
