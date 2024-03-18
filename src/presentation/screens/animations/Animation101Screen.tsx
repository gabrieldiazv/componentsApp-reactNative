import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Animated,
  Easing,
} from 'react-native';

import {useAnimation} from '../../hooks/useAnimation';
import {CustomView} from '../../components/ui/CustomView';
import {useContext} from 'react';
import {ThemeContext} from '../../context/ThemeContext';

export const Animation101Screen = () => {
  const {fadeIn, fadeOut, animateOpacity, animateTop, startMovingTopPosition} =
    useAnimation();

  const {colors} = useContext(ThemeContext);

  return (
    <CustomView style={styles.container}>
      <Animated.View
        style={[
          styles.purpleBox,
          {
            backgroundColor: colors.primary,
          },
          {
            opacity: animateOpacity,
            transform: [{translateY: animateTop}],
          },
        ]}
      />

      <Pressable
        onPress={() => {
          fadeIn({});
          startMovingTopPosition({
            initialPosition: -100,
            easing: Easing.elastic(2),
            duration: 750,
          });
        }}
        style={{marginTop: 10}}>
        <Text style={{color: colors.text}}>Fade In</Text>
      </Pressable>
      <Pressable onPress={() => fadeOut({toValue: 0})} style={{marginTop: 10}}>
        <Text style={{color: colors.text}}>Fade out</Text>
      </Pressable>
    </CustomView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  purpleBox: {
    width: 150,
    height: 150,
  },
});
