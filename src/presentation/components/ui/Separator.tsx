import {View, Text, StyleSheet, StyleProp, ViewStyle} from 'react-native';
import {colors} from '../../../config/theme/theme';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

interface Props {
  style?: StyleProp<ViewStyle>;
}

export const Separator = ({style}: Props) => {
  const {colors} = useContext(ThemeContext);

  return (
    <View
      style={{
        backgroundColor: colors.cardBackground,
      }}>
      <View
        style={[
          {
            alignSelf: 'center',
            width: '80%',
            height: 1,
            backgroundColor: colors.text,
            opacity: 0.1,
            marginVertical: 0.4,
          },
          style,
        ]}
      />
    </View>
  );
};

// const style = StyleSheet.create({
//   separator: {
//     borderBottomColor: 'black',
//     borderBottomWidth: 1,
//     marginVertical: 5,
//   },
// });
