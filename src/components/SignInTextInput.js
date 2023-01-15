import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {palette} from './../lib/colorPalette';

export default function SignInTextInput() {
  return (
    <View style={styles.block}>
      <TextInput style={styles.textInput} />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {backgroundColor: palette.signInScreen.textInputBackgroundColor},
  textInput: {
    width: 300,
    height: 50,
    padding: 5,
    borderWidth: 1,
    borderRadius: 5,
  },
});
