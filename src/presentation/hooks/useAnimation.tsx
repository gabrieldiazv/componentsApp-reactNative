import {useRef} from 'react';
import {Animated, Easing} from 'react-native';

export const useAnimation = () => {
  const animateOpacity = useRef(new Animated.Value(0)).current;
  const animateTop = useRef(new Animated.Value(0)).current;

  const fadeIn = ({duration = 300, toValue = 1, callback = () => {}}) => {
    // Animated.timing(animateTop, {
    //   toValue: 0,
    //   duration: 700,
    //   useNativeDriver: true,
    //   //   easing: Easing.elastic(2),
    //   easing: Easing.bounce,
    // }).start();

    Animated.timing(animateOpacity, {
      toValue,
      duration,
      useNativeDriver: true,
    }).start(callback);
  };

  const fadeOut = ({duration = 300, toValue = 1, callback = () => {}}) => {
    Animated.timing(animateOpacity, {
      toValue,
      duration,
      useNativeDriver: true,
    }).start(callback);
  };

  const startMovingTopPosition = ({
    initialPosition = 0,
    duration = 300,
    toValue = 1,
    easing = Easing.bounce,
    callback = () => {},
  }) => {
    animateTop.setValue(initialPosition);
    Animated.timing(animateTop, {
      toValue,
      duration,
      useNativeDriver: true,
      easing: easing
    }).start(callback);
  };

  return {
    // properties
    animateOpacity,
    animateTop,
    // methods
    fadeIn,
    fadeOut,
    startMovingTopPosition,
  };
};
