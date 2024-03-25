import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import Video from 'react-native-video';
import {commentIcon, likeIcon} from '../icons';

const dummy_video_list = [
  {
    id: 1,
    uri: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    user: 'test1',
    contents: 'lovetaeha',
    like: 2320,
    comments: 64,
  },
  {
    id: 2,
    uri: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    user: 'test2',
    contents: 'lovetaeha',
    like: 2320,
    comments: 64,
  },
  {
    id: 3,
    uri: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    user: 'test3',
    contents: 'lovetaeha',
    like: 2320,
    comments: 64,
  },
  {
    id: 4,
    uri: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    user: 'test4',
    contents: 'lovetaeha',
    like: 2320,
    comments: 64,
  },
  {
    id: 5,
    uri: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    user: 'test5',
    contents: 'lovetaeha',
    like: 2320,
    comments: 64,
  },
  {
    id: 6,
    uri: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    user: 'test6',
    contents: 'lovetaeha',
    like: 2320,
    comments: 64,
  },
];

export default () => {
  const {width, height} = useWindowDimensions();

  const renderVideo = ({item}) => {
    return (
      <View>
        <Video
          source={{uri: item.uri}}
          resizeMode="cover"
          playInBackground={false}
          playWhenInactive={false}
          repeat={true}
          rate={1}
          style={{width, height: height - 120}}
        />
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            width,
            height: 140,
            backgroundColor: '#000',
            opacity: 0.4,
          }}
        />
        <View style={{position: 'absolute', bottom: 32}}>
          <View
            style={{
              marginHorizontal: 16,
              gap: 8,
            }}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 8,
              }}>
              <Image
                source={{uri: 'https://picsum.photos/130/130'}}
                style={{width: 32, height: 32, borderRadius: 100}}
              />
              <Text style={{fontSize: 16, fontWeight: '400', color: '#fff'}}>
                {item.user}
              </Text>
              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  borderColor: '#fff',
                  paddingVertical: 6,
                  paddingHorizontal: 8,
                  borderRadius: 4,
                }}>
                <Text style={{fontSize: 16, color: '#fff'}}>팔로우</Text>
              </TouchableOpacity>
            </TouchableOpacity>
            <View>
              <Text style={{color: '#fff'}}>대박</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            position: 'absolute',
            bottom: 24,
            right: 16,
          }}>
          <TouchableOpacity style={{alignItems: 'center'}}>
            <Image source={likeIcon} style={{width: 40, height: 40}} />
            <Text style={{fontSize: 13, color: '#fff'}}>
              {item.like.toLocaleString()}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{alignItems: 'center'}}>
            <Image source={commentIcon} style={{width: 40, height: 40}} />
            <Text style={{fontSize: 13, color: '#fff'}}>
              {item.comments.toLocaleString()}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={{flex: 1}}>
        <FlatList
          data={dummy_video_list}
          renderItem={renderVideo}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          snapToInterval={height - 120}
          snapToAlignment="start"
          decelerationRate={'fast'}
        />
      </View>
    </SafeAreaView>
  );
};
