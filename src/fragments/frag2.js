import React from 'react';
import {View, StyleSheet} from 'react-native';

export default function Frag2(props) {
  const styles = StyleSheet.create({
    mainCont: {
      height: '100%',
      width: '100%',
      backgroundColor: '#ff0000',
    },
  });
  return <View style={styles.mainCont}></View>;
}
