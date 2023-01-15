import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SignInTextInput from '../src/components/SignInTextInput';
import {palette} from '../src/lib/colorPalette';
import SignScreenButton from './../src/components/SignScreenButton';
import App from './../App';

export default function SignInScreen() {
  const [isSignUp, setIsSignUP] = useState(false);
  const onPress = () => {
    setIsSignUP(!isSignUp);
  };

  return (
    <View style={styles.block}>
      <View style={styles.upperBlock}>
        <View style={styles.titleBlock}>
          <Text style={styles.title}>Gorgeous Diary</Text>
        </View>
        <View style={styles.inputBlock}>
          <View style={styles.wrapper}>
            <SignInTextInput />
          </View>
          <View style={styles.wrapper}>
            <SignInTextInput />
          </View>
          {isSignUp ? (
            <View style={styles.wrapper}>
              <SignInTextInput />
            </View>
          ) : (
            <View style={styles.wrapper}></View>
          )}
        </View>
      </View>
      <View style={styles.lowerBlock}>
        <View style={styles.buttonsWrapper}>
          {isSignUp ? (
            <>
              <View style={styles.buttonWrapper}>
                <SignScreenButton content={'회원가입'} />
              </View>
              <View style={styles.buttonWrapper}>
                <SignScreenButton onPress={onPress} content={'로그인'} />
              </View>
            </>
          ) : (
            <>
              <View style={styles.buttonWrapper}>
                <SignScreenButton content={'로그인'} />
              </View>
              <View style={styles.buttonWrapper}>
                <SignScreenButton onPress={onPress} content={'회원가입'} />
              </View>
            </>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: palette.signInScreen.backgroundColor,
  },
  titleBlock: {flex: 0.5, justifyContent: 'center'},
  title: {fontSize: 30, color: 'black'},
  upperBlock: {flex: 1, alignItems: 'center'},
  inputBlock: {flex: 1},
  wrapper: {marginVertical: 5},
  lowerBlock: {flex: 0.8},
  buttonsWrapper: {flex: 1, alignItems: 'center'},
  buttonWrapper: {marginVertical: 5},
});
