import {Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './pages/Home';
import Splash from './pages/Splash';
import CustomBottomTab from './components/CustomBottomTab';
import Search from './pages/Search';
import Add from './pages/Add';
import Play from './pages/Play';
import MyPage from './pages/MyPage';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator
      tabBar={props => <CustomBottomTab {...props} />}
      screenOptions={{headerShown: false}}>
      <Tab.Screen name="홈" component={Home} />
      <Tab.Screen name="검색" component={Search} />
      <Tab.Screen name="추가" component={Add} />
      <Tab.Screen name="쇼츠" component={Play} />
      <Tab.Screen name="마이페이지" component={MyPage} />
    </Tab.Navigator>
  );
};

export default () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        // gestureEnabled: false,
      }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="MainTab" component={MainTab} />
    </Stack.Navigator>
  );
};
