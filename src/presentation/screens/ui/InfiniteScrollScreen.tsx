import {useState} from 'react';
import {View, Text, Image, ActivityIndicator} from 'react-native';
import {CustomView} from '../../components/ui/CustomView';
import {Title} from '../../components/ui/Title';
import {FlatList} from 'react-native-gesture-handler';
import {colors} from '../../../config/theme/theme';
import { FadeInImage } from '../../components/ui/FadeInImage';

export const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

  const loadMore = () => {
    const newArray: number[] = [];
    for (let i = 0; i < 5; i++) {
      newArray[i] = numbers.length + i + 1;
    }
    setTimeout(() => {
      setNumbers([...numbers, ...newArray]);
    }, 3000);
  };

  return (
    <View style={{backgroundColor: 'black'}}>
      <FlatList
        onEndReached={loadMore}
        onEndReachedThreshold={0.6}
        data={numbers}
        keyExtractor={item => item.toString()}
        renderItem={({item}) => <ListItem number={item} />}
        ListFooterComponent={() => (
          <View
            style={{
              height: 150,
              justifyContent: 'center',
              
            }}>
            <ActivityIndicator size={50} color={colors.primary} />
          </View>
        )}
      />
    </View>
  );
};

interface ListItemProps {
  number: number;
}

const ListItem = ({number}: ListItemProps) => {
  return (
    <FadeInImage
        uri={`https://picsum.photos/id/${number}/500/400`}
        style={{
          width: '100%',
          height: 400,
        }}
    />
    // <Image
    //   source={{uri: `https://picsum.photos/id/${number}/500/400`}}
    //   style={{
    //     width: '100%',
    //     height: 400,
    //   }}
    // />
  );
};
