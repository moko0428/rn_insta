import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import React, {useState} from 'react';
import {searchOn, smallVideo, smallmulti} from '../icons';
import SearchModal from '../components/SearchModal';

const dummy_search = [
  {
    id: 1,
    img: 'https://picsum.photos/130/130',
    category: 'MULTIIMG',
  },
  {
    id: 2,
    img: 'https://picsum.photos/130/130',
  },
  {
    id: 3,
    img: 'https://picsum.photos/130/130',
    category: 'VIDEO',
  },
  {
    id: 4,
    img: 'https://picsum.photos/130/130',
  },
  {
    id: 5,
    img: 'https://picsum.photos/130/130',
    category: 'VIDEO',
  },
  {
    id: 6,
    img: 'https://picsum.photos/130/130',
  },
  {
    id: 7,
    img: 'https://picsum.photos/130/130',
    category: 'MULTIIMG',
  },
  {
    id: 8,
    img: 'https://picsum.photos/130/130',
    category: 'VIDEO',
  },
  {
    id: 9,
    img: 'https://picsum.photos/130/130',
    category: 'MULTIIMG',
  },
  {
    id: 10,
    img: 'https://picsum.photos/130/130',
    category: 'MULTIIMG',
  },
  {
    id: 11,
    img: 'https://picsum.photos/130/130',
    category: 'MULTIIMG',
  },
  {
    id: 12,
    img: 'https://picsum.photos/130/130',
    category: 'MULTIIMG',
  },
  {
    id: 13,
    img: 'https://picsum.photos/130/130',
    category: 'MULTIIMG',
  },
  {
    id: 14,
    img: 'https://picsum.photos/130/130',
    category: 'VIDEO',
  },
  {
    id: 15,
    img: 'https://picsum.photos/130/130',
  },
  {
    id: 16,
    img: 'https://picsum.photos/130/130',
    category: 'VIDEO',
  },
  {
    id: 17,
    img: 'https://picsum.photos/130/130',
  },
  {
    id: 18,
    img: 'https://picsum.photos/130/130',
  },
  {
    id: 19,
    img: 'https://picsum.photos/130/130',
  },
  {
    id: 20,
    img: 'https://picsum.photos/130/130',
    category: 'VIDEO',
  },
  {
    id: 21,
    img: 'https://picsum.photos/130/130',
  },
  {
    id: 22,
    img: 'https://picsum.photos/130/130',
  },
  {
    id: 23,
    img: 'https://picsum.photos/130/130',
  },
  {
    id: 24,
    img: 'https://picsum.photos/130/130',
    category: 'VIDEO',
  },
  {
    id: 25,
    img: 'https://picsum.photos/130/130',
  },
  {
    id: 26,
    img: 'https://picsum.photos/130/130',
    category: 'VIDEO',
  },
  {
    id: 27,
    img: 'https://picsum.photos/130/130',
  },
];

export default ({navigation}) => {
  const [isVisible, setVisible] = useState(false);

  const {width} = useWindowDimensions();

  const renderImg = ({item}) => {
    return (
      <TouchableOpacity style={{borderWidth: 1, borderColor: '#fff'}}>
        <Image
          source={
            item.category === 'VIDEO'
              ? smallVideo
              : item.category === 'MULTIIMG'
              ? smallmulti
              : ''
          }
          style={{
            position: 'absolute',
            right: 8,
            top: 8,
            width: 24,
            height: 24,
            zIndex: 4,
          }}
        />
        <Image
          source={{uri: item.img}}
          style={{width: width / 3 - 2, height: width / 3 - 2}}
        />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={{flex: 1}}>
        <View style={styles.searchContainer}>
          <TouchableOpacity
            onPress={() => setVisible(!isVisible)}
            z
            style={styles.searchWrapper}>
            <TouchableOpacity style={styles.searchIcon}>
              <Image source={searchOn} style={{width: 24, height: 24}} />
            </TouchableOpacity>
            <Text allowFontScaling={false} style={styles.inputStyle}>
              검색어를 입력하세요.
            </Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={dummy_search}
          renderItem={renderImg}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          removeClippedSubviews
          numColumns={3}
        />
        <SearchModal isVisible={isVisible} setVisible={setVisible} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    height: 68,
    backgroundColor: '#fff',
  },
  searchWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8f8f8',
    marginHorizontal: 16,
    marginVertical: 12,
    borderRadius: 4,
  },
  searchIcon: {
    marginLeft: 16,
    marginRight: 2,
    color: 'gray',
  },
  inputStyle: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
    fontWeight: '400',
    color: '#828282',
    paddingRight: 12,
  },
});
