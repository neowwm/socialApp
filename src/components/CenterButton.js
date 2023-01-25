import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Pressable, StyleSheet, useWindowDimensions} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {palette} from './../lib/colorPalette';

const BUTTON_SIZE = 50;

export default function CenterButton({setModalVisible}) {
  const {width, height} = useWindowDimensions();
  const navigation = useNavigation();
  const onPress = () => {
    setModalVisible(true);
  };

  return (
    <View style={{...styles.wrapper, left: width * 0.5 - BUTTON_SIZE / 2}}>
      <Pressable android_ripple={{color: 'gray'}} onPress={onPress}>
        <Icon
          name="pluscircle"
          color={palette.centerButtonColor.backgroundColor}
          size={BUTTON_SIZE}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    width: BUTTON_SIZE,
    height: BUTTON_SIZE,
    bottom: 20,
    borderRadius: 20,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
