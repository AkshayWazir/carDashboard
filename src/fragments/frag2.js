import React from 'react';
import {View, StyleSheet, Button} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

export default function Frag2(props) {
  const animLeftMargin = useSharedValue(10);
  const animTopMargin = useSharedValue(10);

  const animatedStyles = useAnimatedStyle(() => {
    return {marginLeft: animLeftMargin.value, marginTop: animTopMargin.value};
  });

  const styles = StyleSheet.create({
    mainCont: {
      height: '100%',
      width: '100%',
      backgroundColor: '#fff',
    },
    circle: {
      height: 400,
      width: 400,
      borderRadius: 400,
      backgroundColor: '#ff00ff',
      margin: 10,
    },
  });
  return (
    <View style={styles.mainCont}>
      <Button
        title="animate"
        onPress={() => {
          animLeftMargin.value = withTiming(200, {duration: 1000});
          animTopMargin.value = withTiming(200, {duration: 1000});
        }}
      />
      <Animated.View style={[styles.circle, animatedStyles]} />
    </View>
  );
}
