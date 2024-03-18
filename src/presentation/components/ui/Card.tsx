import {ViewStyle, StyleProp} from 'react-native';
import {View, Text} from 'react-native';
import {colors} from '../../../config/theme/theme';
import {PropsWithChildren, useContext} from 'react';
import { ThemeContext } from '../../context/ThemeContext';

interface Props extends PropsWithChildren {
  style?: StyleProp<ViewStyle>;
}

export const Card = ({style, children}: Props) => {
  
  const {colors} = useContext(ThemeContext);
  return (
    <View
      style={[
        {
          backgroundColor: colors.cardBackground,
          borderRadius: 10,
          padding: 10,
        },

        style,
      ]}>
      {children}
    </View>
  );
};
