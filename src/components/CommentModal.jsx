import React, {useCallback, useState} from 'react';
import {
  FlatList,
  Image,
  KeyboardAvoidingView,
  Platform,
  Text,
  View,
  useWindowDimensions,
  TouchableOpacity,
  TextInput,
  Keyboard,
} from 'react-native';
import Modal from 'react-native-modal';
import {likeIcon, moreIcon} from '../pages/Home';
import {addButton} from '../icons';

const dummy_comments = [
  {
    id: 1,
    name: 'BONG',
    contents: '와우 굿이에요.',
    profileImg: 'https://picsum.photos/60/60',
  },
  {
    id: 2,
    name: 'Karina',
    contents: '와우 멋져.',
    profileImg: 'https://picsum.photos/60/60',
  },
  {
    id: 3,
    name: 'eunbin',
    contents: '와우 대박.',
    profileImg: 'https://picsum.photos/60/60',
  },
];

const CommentItem = ({item, index}) => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <View style={{flexDirection: 'row', justifyContent: 'center', gap: 4}}>
        <View>
          <Image
            source={{uri: item.profileImg}}
            style={{width: 32, height: 32, borderRadius: 100}}
          />
        </View>
        <View>
          <View style={{flexDirection: 'row', gap: 4, alignItems: 'center'}}>
            <Text>{item.name}</Text>
            <Text style={{fontSize: 9, fontWeight: '400', color: '#4f4f4f'}}>
              24분전
            </Text>
          </View>
          <Text>{item.contents}</Text>
        </View>
      </View>
      <View style={{alignItems: 'center'}}>
        <Image source={likeIcon} style={{width: 24, height: 24}} />
        <Text>1</Text>
      </View>
    </View>
  );
};

export default ({isVisible, setVisible}) => {
  const [textValue, setTextValue] = useState('');
  const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = useWindowDimensions();

  const renderComment = useCallback(({item, index}) => {
    return <CommentItem item={item} index={index} />;
  }, []);
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
        margin: 0,
        alignItems: 'center',
        justifyContent: 'flex-end',
      }}
      hideModalContentWhileAnimating>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={8}
        style={{width: '100%'}}>
        <View
          style={{
            paddingTop: 20,
            paddingHorizontal: 16,
            height: SCREEN_HEIGHT / 1.5,
            backgroundColor: '#fff',
            borderTopEndRadius: 16,
            borderTopStartRadius: 16,
          }}>
          <View
            pointerEvents="none"
            style={{
              position: 'absolute',
              top: 16,
              left: 0,
              right: 0,
              alignItems: 'center',
            }}>
            <View
              style={{
                width: 30,
                height: 4,
                borderRadius: 4,
                backgroundColor: '#eee',
              }}
            />
          </View>
          <View style={{flex: 1}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 16,
              }}>
              <View />
              <View>
                <Text style={{marginLeft: 20}}>댓글</Text>
              </View>
              <Image source={moreIcon} style={{width: 24, height: 24}} />
            </View>
            <FlatList
              data={dummy_comments}
              renderItem={renderComment}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
              ItemSeparatorComponent={() => <View style={{height: 32}} />}
              style={{flex: 1}}
            />
          </View>
          <View
            style={{
              borderTopWidth: 1,
              borderColor: '#eee',
              flexDirection: 'row',
              alignItems: 'flex-end',
            }}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                paddingHorizontal: 12,
                marginTop: 16,
                marginBottom: 24,
                minHeight: 40,
                maxHeight: 130,
                borderRadius: 6,
                borderWidth: 1,
                borderColor: '#666',
              }}>
              <TextInput
                style={{
                  minHeight: 23,
                  maxHeight: 80,
                  paddingVertical: 0,
                  lineHeight: 18,
                  fontSize: 15,
                  color: '#3a3a3a',
                }}
                multiline
                maxLength={200}
                placeholder="댓글을 입력해주세요."
                placeholderTextColor={'#bbb'}
                autoCapitalize="none"
                spellCheck={false}
                autoCorrect={false}
                value={textValue}
                onChangeText={text => setTextValue(textValue)}
              />
            </View>
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 28,
                marginLeft: 6,
              }}>
              <Image source={addButton} style={{width: 32, height: 32}} />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};
