import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import RootStack from './RootStack';

export default function App() {
  return (
    <SafeAreaView style={styles.block}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} />
      <RootStack />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  block: {flex: 1},
});
