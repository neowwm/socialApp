import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import RootStack from './RootStack';

export default function App() {
  return (
    <SafeAreaView style={styles.block}>
      <RootStack />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  block: {flex: 1},
});
