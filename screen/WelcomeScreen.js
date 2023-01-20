import React from 'react';
import {Text, View} from 'react-native';
import {useAuth} from '../contexts/AuthContexts';

export default function WelcomeScreen() {
  const user = useAuth();
  console.log(user);
  return <Text>환영합니다.!!{user._user.email}</Text>;
}
