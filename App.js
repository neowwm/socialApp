import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AuthProvider} from './contexts/AuthContexts';
import {ActionsProvider, PostsProvider} from './contexts/DataAndActionContexts';
import RootStack from './RootStack';
import {palette} from './src/lib/colorPalette';

export default function App() {
  return (
    <SafeAreaView style={styles.block}>
      <AuthProvider>
        <PostsProvider>
          <ActionsProvider>
            <StatusBar
              barStyle={'dark-content'}
              backgroundColor={palette.statusBar.backgroundColor}
            />
            <RootStack />
          </ActionsProvider>
        </PostsProvider>
      </AuthProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  block: {flex: 1},
});
