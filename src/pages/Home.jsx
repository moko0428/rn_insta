import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import CommentModal from '../components/CommentModal';

const logo = require('../assets/icons/home/logo.png');
export const likeIcon = require('../assets/icons/home/likeIcon.png');
const commentIcon = require('../assets/icons/home/commentIcon.png');
export const moreIcon = require('../assets/icons/home/more.png');

export const {width} = Dimensions.get('window');

const dummy_story = [
  {
    id: 1,
    name: 'feb.25jy',
    profileImg: 'https://avatar.iran.liara.run/public',
    isNew: true,
  },
  {
    id: 2,
    name: 'SONGSONGSONGSONG',
    profileImg: 'https://avatar.iran.liara.run/public',
    isNew: true,
  },
  {
    id: 3,
    name: 'NONGNONGNONGNONGNONG',
    profileImg: 'https://avatar.iran.liara.run/public',
    isNew: false,
  },
  {
    id: 4,
    name: 'DONGDONGDONGDONG',
    profileImg: 'https://avatar.iran.liara.run/public',
    isNew: false,
  },
  {
    id: 5,
    name: 'BONG',
    profileImg: 'https://avatar.iran.liara.run/public',
    isNew: false,
  },
  {
    id: 6,
    name: 'SONGSONGSONGSONG',
    profileImg: 'https://avatar.iran.liara.run/public',
    isNew: true,
  },
  {
    id: 7,
    name: 'NONGNONGNONGNONGNONG',
    profileImg: 'https://avatar.iran.liara.run/public',
    isNew: true,
  },
  {
    id: 8,
    name: 'DONGDONGDONGDONG',
    profileImg: 'https://avatar.iran.liara.run/public',
    isNew: false,
  },
  {
    id: 9,
    name: 'BONG',
    profileImg: 'https://avatar.iran.liara.run/public',
    isNew: true,
  },
  {
    id: 10,
    name: 'SONGSONGSONGSONG',
    profileImg: 'https://avatar.iran.liara.run/public',
    isNew: false,
  },
  {
    id: 11,
    name: 'NONGNONGNONGNONGNONG',
    profileImg: 'https://avatar.iran.liara.run/public',
    isNew: true,
  },
  {
    id: 12,
    name: 'DONGDONGDONGDONG',
    profileImg: 'https://avatar.iran.liara.run/public',
    isNew: true,
  },
];

const dummy_feed = [
  {
    id: 1,
    name: 'feb.25jy',
    profileImg: 'https://avatar.iran.liara.run/public',
    feedImg: [
      'https://picsum.photos/400/400',
      'https://picsum.photos/400/400',
      'https://picsum.photos/400/400',
      'https://picsum.photos/400/400',
    ],
    contents: '내 마음... 받아줘',
    like: 37,
    likeUsers: [1, 2, 3],
  },
  {
    id: 2,
    name: 'BONG',
    profileImg: 'https://avatar.iran.liara.run/public',
    feedImg: [
      'https://picsum.photos/400/400',
      'https://picsum.photos/400/400',
      'https://picsum.photos/400/400',
      'https://picsum.photos/400/400',
    ],
    contents: '내 마음... 받아줘',
    like: 37,
    likeUsers: [1, 2, 3],
  },
  {
    id: 3,
    name: 'SONG',
    profileImg: 'https://avatar.iran.liara.run/public',
    feedImg: [
      'https://picsum.photos/400/400',
      'https://picsum.photos/400/400',
      'https://picsum.photos/400/400',
      'https://picsum.photos/400/400',
    ],
    contents: '내 마음... 받아줘',
    like: 37,
    likeUsers: [1, 2, 3],
  },
];
export default () => {
  const [isVisible, setVisible] = useState(false);

  const renderStory = ({item, index}) => {
    return (
      <TouchableOpacity
        style={index === 0 ? {marginHorizontal: 16} : {marginRight: 16}}>
        <View style={{alignItems: 'center'}}>
          <Image
            source={{uri: item.profileImg}}
            style={
              item.isNew
                ? {width: 52, height: 52, marginBottom: 2}
                : {
                    width: 52,
                    height: 52,
                    marginBottom: 2,
                    borderWidth: 2,
                    borderRadius: 100,
                    borderColor: '#2a85ff',
                  }
            }
          />
          <Text
            numberOfLines={1}
            style={{
              maxWidth: 52,
              fontSize: 13,
              fontWeight: '400',
              lineHeight: 16.22,
              color: '#4f4f4f',
            }}>
            {item.name}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  const renderFeed = ({item, index}) => {
    return (
      <View style={{paddingVertical: 24}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginHorizontal: 16,
            marginBottom: 8,
          }}>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center', gap: 4}}>
            <Image
              source={{uri: item.profileImg}}
              style={{width: 32, height: 32}}
            />
            <Text style={{fontSize: 16, fontWeight: '400', lineHeight: 19.97}}>
              {item.name}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={moreIcon} style={{width: 24, height: 24}} />
          </TouchableOpacity>
        </View>
        <Image
          source={{uri: item.feedImg[0]}}
          style={{width: width, height: width, marginBottom: 8}}
          resizeMode="contain"
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 16,
            marginBottom: 4,
          }}>
          <View
            style={{
              flexDirection: 'row',
              gap: 8,
              alignItems: 'center',
            }}>
            <TouchableOpacity>
              <Image source={likeIcon} style={{width: 32, height: 32}} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setVisible(!isVisible)}>
              <Image source={commentIcon} style={{width: 32, height: 32}} />
            </TouchableOpacity>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text>
              {item.feedImg.lenght > 1 ? (
                <Image source={moreIcon} style={{width: 32, height: 32}} />
              ) : (
                ''
              )}
            </Text>
          </View>
          <View>
            <Image source={moreIcon} style={{width: 32, height: 32}} />
          </View>
        </View>
        <View style={{marginHorizontal: 16, gap: 6}}>
          <Text>외 {item.like}명이 좋아합니다.</Text>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 4}}>
            <Text>{item.name}</Text>
            <Text style={{fontWeight: '400', color: '#4f4f4f'}}>
              {item.contents}
            </Text>
          </View>
          <Text style={{fontSize: 11, color: '#adadad'}}>2월 25일</Text>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={{flex: 1, backgroundColor: '#fff', marginBottom: 32}}>
        <FlatList
          data={dummy_feed}
          renderItem={renderFeed}
          keyExtractor={item => item.id}
          removeClippedSubviews
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={() => (
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  padding: 16,
                  alignItems: 'center',
                }}>
                <View>
                  <Image source={logo} style={{width: 88, height: 21.91}} />
                </View>
                <View
                  style={{flexDirection: 'row', gap: 8, alignItems: 'center'}}>
                  <TouchableOpacity>
                    <Image source={likeIcon} style={{width: 32, height: 32}} />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      source={commentIcon}
                      style={{width: 32, height: 32}}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View>
                <FlatList
                  data={dummy_story}
                  renderItem={renderStory}
                  keyExtractor={item => item.id}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  removeClippedSubviews
                />
              </View>
            </View>
          )}
        />
        <CommentModal isVisible={isVisible} setVisible={setVisible} />
      </View>
    </SafeAreaView>
  );
};
