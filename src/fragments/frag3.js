import React from 'react';
import {View, StyleSheet} from 'react-native';

export default function Frag3(props) {
  const styles = StyleSheet.create({
    mainCont: {
      height: '100%',
      width: '100%',
      backgroundColor: '#0000ff',
    },
  });
  return <View style={styles.mainCont}></View>;
}
