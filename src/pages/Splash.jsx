import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('MainTab');
    }, 1000);
  });

  return (
    <View style={styles.splashContainer}>
      <Text>Splash</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
