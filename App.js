import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AuthProvider} from './contexts/AuthContexts';
import RootStack from './RootStack';
import {palette} from './src/lib/colorPalette';

export default function App() {
  return (
    <AuthProvider>
      <SafeAreaView style={styles.block}>
        <StatusBar
          barStyle={'dark-content'}
          backgroundColor={palette.statusBar.backgroundColor}
        />
        <RootStack />
      </SafeAreaView>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  block: {flex: 1},
});
