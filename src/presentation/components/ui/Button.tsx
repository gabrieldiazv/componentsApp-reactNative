import {View, Text, StyleProp, ViewStyle, Pressable} from 'react-native';
import {colors, globalStyles} from '../../../config/theme/theme';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

interface Props {
  text: string;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

export const Button = ({text, style, onPress}: Props) => {
  const {colors} = useContext(ThemeContext);

  return (
    <Pressable
      style={({pressed}) => [
        globalStyles.btnPrimary,
        {
          opacity: pressed ? 0.8 : 1,
          backgroundColor: colors.primary,
        },
        style,
      ]}
      onPress={onPress}>
      <Text
        style={[
          globalStyles.btnPrimaryText,
          {
            color: colors.buttonTextColor,
          },
        ]}>
        {text}
      </Text>
    </Pressable>
  );
};
