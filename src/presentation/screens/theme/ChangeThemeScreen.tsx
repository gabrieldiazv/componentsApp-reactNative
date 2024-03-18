import {View, Text} from 'react-native';
import {CustomView} from '../../components/ui/CustomView';
import {Title} from '../../components/ui/Title';
import {Button} from '../../components/ui/Button';
import {useContext} from 'react';
import {ThemeContext} from '../../context/ThemeContext';

export const ChangeThemeScreen = () => {
  const {setTheme, currentTheme, colors} = useContext(ThemeContext);

  return (
    <CustomView margin>
      <Title text={`Cambiar tema: ${currentTheme}`} />
      <Button
        onPress={() => setTheme('light')}
        text="Light"
        style={{marginBottom: 10}}
      />
      <Button onPress={() => setTheme('dark')} text="Dark" />
      <View style={{height: 10}}/>
      <Text style={{color:colors.text}}>
        {JSON.stringify(colors,null,2)}
      </Text>
    </CustomView>
  );
};
