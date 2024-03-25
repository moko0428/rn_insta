import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

const Tab = createMaterialTopTabNavigator();

const FollowerTab = () => {
  return (
    <View>
      <Text>팔로워</Text>
    </View>
  );
};

const FollowingTab = () => {
  return (
    <View>
      <Text>팔로잉</Text>
    </View>
  );
};
export default () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <Tab.Navigator>
        <Tab.Screen name="FollwerTab" component={FollowerTab} />
        <Tab.Screen name="FollowingTab" component={FollowingTab} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};
