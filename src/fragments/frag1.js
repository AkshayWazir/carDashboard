import React from 'react';
import {View, StyleSheet, Button} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

function animateTO(property, targetValue) {
  property.value = withTiming(targetValue, {duration: 500});
}

export default function Frag1(props) {
  const leftMargin = useSharedValue(0);
  const animatedSty = useAnimatedStyle(() => {
    return {marginLeft: leftMargin.value};
  });
  const styles = StyleSheet.create({
    mainCont: {
      height: '100%',
      width: '100%',
      backgroundColor: '#00ff00',
    },
  });

  const initStyle = StyleSheet.create({
    initial: {
      height: 500,
      width: 500,
      backgroundColor: '#ff00ff',
    },
  });
  return (
    <View style={styles.mainCont}>
      <Animated.View style={[initStyle.initial, animatedSty]} />
      <Button title="Animate Now" onPress={() => animateTO(leftMargin, 200)} />
    </View>
  );
}
