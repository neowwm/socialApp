import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {signOut} from '../src/lib/auth';
import {palette} from '../src/lib/colorPalette';

export default function MyProfileScreen() {
  return (
    <View style={styles.block}>
      <Button title="로그아웃" onPress={signOut} />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: palette.myProfileScreen.backgroundColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
