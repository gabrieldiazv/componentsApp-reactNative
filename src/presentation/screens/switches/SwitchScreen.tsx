import {useContext, useState} from 'react';
import {CustomView} from '../../components/ui/CustomView';
import {Switch} from 'react-native-gesture-handler';
import {Card} from '../../components/ui/Card';
import {CustomSwitch} from '../../components/ui/CustomSwitch';
import {Separator} from '../../components/ui/Separator';
import { ThemeContext } from '../../context/ThemeContext';

export const SwitchScreen = () => {
  // const [isEnabled, setIsEnabled] = useState(false);
  // const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });


  return (
    <CustomView
      style={{
        paddingTop: 10,
        paddingHorizontal: 10,
      }}>
      <Card>
        <CustomSwitch
          isOn={state.isActive}
          onChange={value => setState({...state, isActive: value})}
          text="encendido"
        />
      </Card>
      <Separator />
      <Card>
        <CustomSwitch
          isOn={state.isHungry}
          onChange={value => setState({...state, isHungry: value})}
          text="hambriento"
        />
      </Card>
      <Separator />
      <Card>
        <CustomSwitch
          isOn={state.isHappy}
          onChange={value => setState({...state, isHappy: value})}
          text="feliz"
        />
      </Card>
    </CustomView>
  );
};
