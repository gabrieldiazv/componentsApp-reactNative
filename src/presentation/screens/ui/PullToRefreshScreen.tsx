import {View, Text, RefreshControl} from 'react-native';
import {Title} from '../../components/ui/Title';
import {CustomView} from '../../components/ui/CustomView';
import {ScrollView} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useContext, useState} from 'react';
import { globalStyles} from '../../../config/theme/theme';
import { ThemeContext } from '../../context/ThemeContext';

export const PullToRefreshScreen = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const {top} = useSafeAreaInsets();
  const onRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1500);
  };
  const {colors} = useContext(ThemeContext);
  return (
    <ScrollView
      style={[globalStyles.mainContainer, globalStyles.globalMargin]}
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing}
          progressViewOffset={top}
          colors={[colors.primary, 'red', 'orange', 'green']}
          progressBackgroundColor={colors.cardBackground}
          tintColor={colors.primary}
          onRefresh={onRefresh}
        />
      }>
      <CustomView margin>
        <Title text="Pull to refresh" />
      </CustomView>
    </ScrollView>
  );
};
