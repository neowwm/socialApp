import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SignInTextInput from '../src/components/SignInTextInput';
import {palette} from '../src/lib/colorPalette';

export default function SignInScreen() {
  return (
    <View style={styles.block}>
      <SignInTextInput />
      <SignInTextInput />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: palette.signInScreen.backgroundColor,
  },
});
