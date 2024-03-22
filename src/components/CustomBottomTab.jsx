import React, {useRef} from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  Animated,
} from 'react-native';

const homeOff = require('../assets/icons/bottomtab/home_on.png');
const homeOn = require('../assets/icons/bottomtab/home_off.png');
const playOff = require('../assets/icons/bottomtab/auto_read_play_on.png');
const playOn = require('../assets/icons/bottomtab/auto_read_play_off.png');
const personOff = require('../assets/icons/bottomtab/person_on.png');
const personOn = require('../assets/icons/bottomtab/person_off.png');
const searchOff = require('../assets/icons/bottomtab/search_on.png');
const searchOn = require('../assets/icons/bottomtab/search_off.png');
const addCirle = require('../assets/icons/bottomtab/add_circle.png');

const CustomBottomTab = ({state, navigation, insets, descriptors}) => {
  const tab1Value = useRef(new Animated.Value(0)).current;
  const tab2Value = useRef(new Animated.Value(0)).current;
  const tab3Value = useRef(new Animated.Value(0)).current;
  const tab4Value = useRef(new Animated.Value(0)).current;
  const tab5Value = useRef(new Animated.Value(0)).current;

  const scaleAnimated = (value, animatedValue) => {
    Animated.timing(animatedValue, {
      useNativeDriver: true,
      toValue: value,
      duration: 150,
    });
  };

  const animatedValue = {
    0: tab1Value,
    1: tab2Value,
    2: tab3Value,
    3: tab4Value,
    4: tab5Value,
  };

  return (
    <View style={[styles.bottomTabBarWrapper, {paddingBottom: insets.bottom}]}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label = route.name;
        const isFocused = state.index === index;
        const animatedOf = animatedValue[index];

        const iconFlag = bool => {
          switch (label) {
            case '홈':
              return bool ? homeOn : homeOff;
            case '검색':
              return bool ? searchOn : searchOff;
            case '추가':
              return addCirle;
            case '쇼츠':
              return bool ? playOn : playOff;
            default:
              return bool ? personOn : personOff;
          }
        };
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(`${label}`);
          }

          // scaleAnimated(1, animatedOf).start(({finished}) => {
          //   if (finished) {
          //     scaleAnimated(0, animatedOf).start();
          //   }
          // });
        };
        return (
          <TouchableOpacity
            key={index}
            activeOpacity={0.7}
            onPress={onPress}
            style={{flex: 1, alignItems: 'center'}}>
            <Animated.Image
              source={iconFlag(isFocused)}
              style={{
                width: 24,
                height: 24,
                transform: [
                  {
                    scale: animatedOf.interpolate({
                      inputRange: [0, 1],
                      outputRange: [1, 0.9],
                    }),
                  },
                ],
              }}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  bottomTabBarWrapper: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    justifyContent: 'space-between',
    borderStyle: 'solid',
    borderTopWidth: 0.5,
    borderLeftWidth: 0.5,
    borderRightWidth: 0.5,
    borderColor: '#eee',
    backgroundColor: '#fff',
    paddingTop: 10,
    zIndex: 10,
  },
});

export default CustomBottomTab;
