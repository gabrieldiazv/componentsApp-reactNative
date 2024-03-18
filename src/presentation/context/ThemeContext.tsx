import {createContext, PropsWithChildren, useEffect, useState} from 'react';
import {darkColors, lightColors, ThemeColors} from '../../config/theme/theme';
import {Appearance, useColorScheme} from 'react-native';
import {AppState} from 'react-native';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';

type ThemeColor = 'light' | 'dark';

interface ThemeContextProps {
  currentTheme: ThemeColor;
  colors: ThemeColors;
  setTheme: (theme: ThemeColor) => void;
  isDark: boolean;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({children}: PropsWithChildren) => {
  const colorScheme = useColorScheme();
  const [currentTheme, setCurrentTheme] = useState<ThemeColor>('light');
  const isDark = currentTheme === 'dark';
  const color = isDark ? darkColors : lightColors;

  useEffect(() => {
    // console.log('colorScheme', colorScheme);
    // if(colorScheme==='light'){
    //   setCurrentTheme('light');
    // }
    // if(colorScheme==='dark'){
    //   setCurrentTheme('dark');
    // }

    const subscription = AppState.addEventListener('change', nextAppState => {
      const colorScheme = Appearance.getColorScheme();
      setCurrentTheme(colorScheme === 'dark' ? 'dark' : 'light');
    });

    return () => {
      subscription.remove();
    };
  }, []);

  const setTheme = (theme: ThemeColor) => {
    setCurrentTheme(theme);
  };

  return (
    <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>
      <ThemeContext.Provider
        value={{
          currentTheme: currentTheme,
          colors: color,
          setTheme: setTheme,
          isDark: isDark,
        }}>
        {children}
      </ThemeContext.Provider>
    </NavigationContainer>
  );
};
