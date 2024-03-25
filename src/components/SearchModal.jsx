import React, {useCallback, useState} from 'react';
import {
  Image,
  Text,
  View,
  useWindowDimensions,
  TouchableOpacity,
  TextInput,
  Keyboard,
  StyleSheet,
  Dimensions,
  FlatList,
} from 'react-native';
import Modal from 'react-native-modal';
import {likeIcon} from '../pages/Home';
import {cancelIcon, searchOn} from '../icons';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

const dummy_search = [
  {
    id: 1,
    profileImg: 'https://picsum.photos/60/60',
    name: 'dex_xeb',
    intro: 'DEX / 김진영',
    follow: '197만명',
  },
  {
    id: 2,
    profileImg: 'https://picsum.photos/60/60',
    name: 'dex_xeb',
    intro: 'DEX / 김진영',
    follow: '197만명',
  },
  {
    id: 3,
    profileImg: '',
    name: 'dex_xeb',
    intro: 'DEX / 김진영',
    follow: '197만명',
  },
  {
    id: 4,
    profileImg: 'https://picsum.photos/60/60',
    name: 'dex_xeb',
    intro: 'DEX / 김진영',
    follow: '197만명',
  },
  {
    id: 5,
    profileImg: 'https://picsum.photos/60/60',
    name: 'dex_xeb',
    intro: 'DEX / 김진영',
    follow: '197만명',
  },
  {
    id: 6,
    profileImg: 'https://picsum.photos/60/60',
    name: 'dex_xeb',
    intro: 'DEX / 김진영',
    follow: '197만명',
  },
];
const SearchFriendList = ({name}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        paddingVertical: 12,
      }}>
      <TouchableOpacity
        style={{flexDirection: 'row', alignItems: 'center', gap: 4}}>
        <Image
          source={{uri: 'https://picsum.photos/60/60'}}
          style={{width: 40, height: 40, borderRadius: 100}}
        />
        <Text>{name}</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={cancelIcon} style={{width: 40, height: 40}} />
      </TouchableOpacity>
    </View>
  );
};

export default ({isVisible, setVisible}) => {
  const [keyword, setKeyword] = useState(' ');

  return (
    <Modal
      useNativeDriver
      isVisible={isVisible}
      animationIn={'slideInUp'}
      animationOut={'slideOutDown'}
      animationInTiming={300}
      backdropColor="#000"
      backdropOpacity={0.4}
      onBackdropPress={() => {
        Keyboard.dismiss();
        setVisible(!isVisible);
      }}
      onBackButtonPress={() => {
        Keyboard.dismiss();
        setVisible(!isVisible);
      }}
      style={{
        justifyContent: 'flex-start',
        marginTop: 60,
        backgroundColor: '#fff',
        margin: 0,
      }}
      hideModalContentWhileAnimating>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TouchableOpacity style={styles.searchIcon}>
            <Image source={searchOn} style={{width: 24, height: 24}} />
          </TouchableOpacity>
          <TextInput
            returnKeyType="search"
            placeholder="검색어를 입력하세요."
            placeholderTextColor={'#828282'}
            spellCheck={false}
            autoCorrect={false}
            autoCapitalize="none"
            value={keyword}
            onChange={text => setKeyword(text)}
            allowFontScaling={false}
            style={styles.inputStyle}
            autoFocus
            onSubmitEditing={() => console.log('검색 api 호출')}
          />
          <TouchableOpacity
            style={{
              paddingVertical: 12,
              paddingRight: 12,
              borderRadius: 4,
            }}>
            <Text style={{fontSize: 16, fontWeight: '400', color: '#828282'}}>
              취소
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 30,
          paddingVertical: 10,
        }}>
        <Text style={{fontSize: 16, fontWeight: '500', color: '#333'}}>
          최근 검색
        </Text>
        <TouchableOpacity>
          <Text style={{color: '#828282'}}>전체 삭제</Text>
        </TouchableOpacity>
      </View>
      <SearchFriendList name={'DEX'} />
    </Modal>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    height: 68,
    width: SCREEN_WIDTH,
    backgroundColor: '#fff',
    borderBottomWidth: 0.5,
    borderBottomColor: '#ededed',
    marginBottom: 4,
  },
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8f8f8',
    marginHorizontal: 32,
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
