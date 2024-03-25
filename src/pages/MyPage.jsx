import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {settingIcon} from '../icons';

export default ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginHorizontal: 16,
            marginBottom: 16,
          }}>
          <Text style={{fontSize: 16, fontWeight: 'bold'}}>feb.25jy</Text>
          <TouchableOpacity>
            <Image source={settingIcon} style={{width: 32, height: 32}} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginHorizontal: 16,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={{marginHorizontal: 16, gap: 4}}>
            <Image
              source={{uri: 'https://picsum.photos/130/130'}}
              style={{width: 60, height: 60, borderRadius: 30}}
            />
            <Text style={{fontSize: 12}}>준둥</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 24}}>
            <TouchableOpacity style={{alignItems: 'center', gap: 2}}>
              <Text style={{fontSize: 12}}>100</Text>
              <Text style={{fontSize: 13}}>게시물</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Follower')}
              style={{alignItems: 'center', gap: 2}}>
              <Text style={{fontSize: 12}}>100</Text>
              <Text style={{fontSize: 13}}>팔로워</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{alignItems: 'center', gap: 2}}>
              <Text style={{fontSize: 12}}>100</Text>
              <Text style={{fontSize: 13}}>팔로잉</Text>
            </TouchableOpacity>
          </View>
          <View></View>
        </View>
      </View>
    </SafeAreaView>
  );
};
