import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {palette} from './../lib/colorPalette';

export default function SignScreenButton({content, onPress}) {
  return (
    <View style={styles.wrapper}>
      <Pressable
        onPress={onPress}
        style={styles.button}
        android_ripple={{color: 'gray'}}>
        <Text style={styles.text}>{content}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {borderRadius: 7, overflow: 'hidden'},
  button: {
    width: 300,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: palette.signInScreen.buttonBackgroundColor,
  },
  text: {fontSize: 25, color: palette.signInScreen.buttonTextColor},
});
