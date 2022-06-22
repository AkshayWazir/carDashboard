import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  useDerivedValue,
  useAnimatedSensor,
  SensorType,
} from 'react-native-reanimated';

export default function Frag3(props) {
  const animatedSensor = useAnimatedSensor(SensorType.ACCELEROMETER, {
    interval: 10,
  });
  // -45 to 45
  // acceleration range = 1 to 24 g

  const animatedStyles = useAnimatedStyle(() => {
    const rotaionSpeed = animatedSensor.sensor.value.z;

    return {
      transform: [{rotate: `${0}deg`}],
    };
  });

  const styles = StyleSheet.create({
    mainCont: {
      height: '100%',
      width: '100%',
      backgroundColor: '#0000ff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    bar: {
      height: 400,
      width: 50,
      backgroundColor: '#fff',
      borderTopLeftRadius: 50,
      borderTopRightRadius: 50,
      transform: [
        {
          rotate: '-45deg',
        },
      ],
    },
  });
  return (
    <View style={styles.mainCont}>
      <Animated.View style={[styles.bar, animatedStyles]} />
    </View>
  );
}
