import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

export default function SignInTextInput() {
  return (
    <View>
      <TextInput style={styles.textInput} placeholder="이메일을 적어주세요." />
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {width: '80%', height: 40, backgroundColor: 'gray'},
});
