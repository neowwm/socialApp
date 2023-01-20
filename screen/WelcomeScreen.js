import React from 'react';
import {Text, View} from 'react-native';
import {useAuth} from '../contexts/AuthContexts';
import SignScreenButton from './../src/components/SignScreenButton';

export default function WelcomeScreen({navigation}) {
  const {currentUser} = useAuth();
  const onPress = () => {
    navigation.navigte('TabsScreen');
  };

  return (
    <Text>
      환영합니다.{currentUser.email}
      <View style={styles.buttonWrapper}>
        <SignScreenButton onPress={onPress} content={'시작'} />
      </View>
    </Text>
  );
}
