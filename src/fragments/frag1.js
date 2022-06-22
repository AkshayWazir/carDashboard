import React, {useState} from 'react';
import {View, StyleSheet, Button} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  runOnUI,
} from 'react-native-reanimated';

function animateTO(property, targetValue) {
  property.value = withTiming(targetValue, {duration: 500});
}

export default function Frag1(props) {
  const [value, setValue] = useState(200);

  // Animated Value
  const leftMargin = useSharedValue(0),
    height = useSharedValue(500),
    width = useSharedValue(500);

  // Animated Styles result
  const animatedSty = useAnimatedStyle(() => {
    return {
      marginLeft: leftMargin.value,
      height: height.value,
      width: width.value,
    };
  });

  const styles = StyleSheet.create({
    mainCont: {
      height: '100%',
      width: '100%',
      backgroundColor: '#00ff00',
    },
    initial: {
      height: 500,
      width: 500,
      backgroundColor: '#ff00ff',
    },
  });

  return (
    <View style={styles.mainCont}>
      <Animated.View style={[styles.initial, animatedSty]} />
      <Button
        title="Animate Now"
        onPress={() => {
          animateTO(leftMargin, value);
          animateTO(height, value);
          animateTO(width, value);
          setValue(value * -1);
        }}
      />
    </View>
  );
}
