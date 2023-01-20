import React, {useRef, useState} from 'react';
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {signIn, signOut, signUp} from '../src/lib/auth';
import {palette} from '../src/lib/colorPalette';
import {emailRegex, pwRegex} from '../src/lib/utils';
import SignScreenButton from './../src/components/SignScreenButton';

export default function SignInScreen({navigation}) {
  const [isSignUp, setIsSignUP] = useState(false);
  const [unSecure, setUnSecure] = useState(false);

  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const onTouchEye = () => {
    setUnSecure(!unSecure);
  };

  const onPress = () => {
    setIsSignUP(!isSignUp);
  };

  const onSignUpHandler = async () => {
    if (invalidInput()) {
      return;
    }

    const {email, password} = form;
    const info = {email, password};

    try {
      const {user} = await signUp(info);
      console.log(user._user.email, 'signup');
      navigation.navigate('WelcomeScreen');
    } catch (e) {
      console.log(e.code);
      Alert.alert(`회원 가입에 실패하였습니다.\n실패사유 : ${e.code}`);
    }
  };

  const onSignInHandler = async () => {
    const {email, password} = form;
    const info = {email, password};
    try {
      const {user} = await signIn(info);
    } catch (e) {
      Alert.alert('로그인에 실패했습니다.');
    }
  };

  const invalidInput = () => {
    if (!form.email) {
      Alert.alert('이메일을 입력해주세요.');
      return true;
    }
    if (!form.password) {
      Alert.alert('비밀번호룰 입력해주세요.');
      return true;
    }
    if (form.password !== form.confirmPassword) {
      Alert.alert('비밀번호와 재확인 비밀번호가 다릅니다.');
      return true;
    }

    const matchedEmail = form.email.match(emailRegex);
    const matchedPw = form.password.match(pwRegex);

    if (matchedEmail === null) {
      Alert.alert('올바른 이메일을 입력해주세요.');
      return true;
    }
    if (matchedPw === null) {
      Alert.alert(
        '비밀번호는 8자리 이상 영문자, 숫자 특수문자 조합이어야 합니다.',
      );
      return true;
    }
  };

  return (
    <View style={styles.block}>
      <View style={styles.upperBlock}>
        <View style={styles.titleBlock}>
          <Text style={styles.title}>속성 인스타그램</Text>
        </View>
        <View style={styles.inputBlock}>
          <View style={styles.textInput}>
            <TextInput
              placeholder="UserEmail"
              onChangeText={t => {
                setForm({...form, email: t});
              }}
              value={form.email}
              textContentType="emailAddress"
              ref={emailRef}
            />
          </View>
          <View style={styles.textInput}>
            <TextInput
              placeholder="Password"
              secureTextEntry={!unSecure ? true : false}
              onChangeText={t => {
                setForm({...form, password: t});
              }}
              value={form.password}
              style={{flex: 6}}
              ref={passwordRef}
            />
            {!isSignUp && (
              <Pressable style={styles.buttonBox} onPress={onTouchEye}>
                {unSecure ? (
                  <Icon name="eye" size={24} color="black" />
                ) : (
                  <Icon name="eye-off" size={24} color="black" />
                )}
              </Pressable>
            )}
          </View>
          {isSignUp ? (
            <View style={styles.textInput}>
              <TextInput
                placeholder="PasswordConfirm"
                secureTextEntry={!unSecure ? true : false}
                onChangeText={t => {
                  setForm({...form, confirmPassword: t});
                }}
                value={form.confirmPassword}
                style={{flex: 6}}
                ref={confirmPasswordRef}
              />
              <Pressable style={styles.buttonBox} onPress={onTouchEye}>
                {unSecure ? (
                  <Icon name="eye" size={24} color="black" />
                ) : (
                  <Icon name="eye-off" size={24} color="black" />
                )}
              </Pressable>
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
                <SignScreenButton
                  content={'회원가입'}
                  onPress={onSignUpHandler}
                />
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
  wrapperPassword: {marginVertical: 5, flexDirection: 'row'},
  lowerBlock: {flex: 0.8},
  buttonsWrapper: {flex: 1, alignItems: 'center'},
  buttonWrapper: {marginVertical: 5},
  textInput: {
    width: 300,
    height: 50,
    padding: 5,
    borderWidth: 1,
    borderRadius: 8,
    flexDirection: 'row',
    marginVertical: 5,
  },
  buttonBox: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
