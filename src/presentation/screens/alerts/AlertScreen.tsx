import {View, Text} from 'react-native';
import {CustomView} from '../../components/ui/CustomView';
import {Title} from '../../components/ui/Title';
import {globalStyles} from '../../../config/theme/theme';
import {Button} from '../../components/ui/Button';
import {Alert} from 'react-native';
import {showPrompt} from '../../../config/adapters/prompt.adapter';
import {useContext} from 'react';
import {ThemeContext} from '../../context/ThemeContext';

export const AlertScreen = () => {
  const {isDark} = useContext(ThemeContext);

  const createTwoButtonAlert = () =>
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {
        userInterfaceStyle: isDark ? 'dark' : 'light',
      },
    );

  const createThreeButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Ask me later',
        onPress: () => console.log('Ask me later pressed'),
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
      
    ]);

  const onShowPrompt = () => {
    showPrompt({
      title: 'Enter password',
      message: 'Enter your password to claim your $1.5B in lottery winnings',
      buttons: [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: password => console.log('OK Pressed, password: ' + password),
          style: 'default',
        },
      ],
      options: {
        type: 'secure-text',
        cancelable: false,
        defaultValue: 'hola mundo',
        placeholder: 'placeholder',
      },
    });

    // prompt(
    //   'Enter password',
    //   'Enter your password to claim your $1.5B in lottery winnings',
    //   [
    //     {
    //       text: 'Cancel',
    //       onPress: () => console.log('Cancel Pressed'),
    //       style: 'cancel',
    //     },
    //     {
    //       text: 'OK',
    //       onPress: password => console.log('OK Pressed, password: ' + password),
    //     },
    //   ],
    //   {
    //     type: 'secure-text',
    //     cancelable: false,
    //     defaultValue: 'test',
    //     placeholder: 'placeholder',
    //   },
    // );

    //! codigo nativo - No Funciona en android
    // Alert.prompt(
    //   'Enter password',
    //   'Enter your password to claim your $1.5B in lottery winnings',
    //   (valor: string) => console.log('info', valor),
    //   'secure-text',
    //   'soy el valor por defecto',
    //   'number-pad',
    // );
  };
  return (
    <CustomView style={globalStyles.globalMargin}>
      <Title safe text="Alertas" />
      <Button text="Alertas - 2 botones" onPress={createTwoButtonAlert} />
      <View style={{height: 10}} />
      <Button text="Alertas - 3 botones" onPress={createThreeButtonAlert} />
      <View style={{height: 10}} />
      <Button text="Prompt" onPress={() => onShowPrompt()} />
    </CustomView>
  );
};
