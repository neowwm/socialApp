import {useRoute, useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  useWindowDimensions,
  Pressable,
  View,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {palette} from './../lib/colorPalette';

export default function PostHeader({onPost}) {
  const {width, height} = useWindowDimensions();
  const route = useRoute();
  const naviagtion = useNavigation();

  return (
    <View style={{...styles.block, width: width}}>
      <View style={styles.wrapper}>
        <Pressable style={styles.arrow} onPress={() => naviagtion.goBack()}>
          <Icon name="arrowleft" size={30} color={'black'} />
        </Pressable>
        <Text style={styles.text}></Text>
      </View>
      <View style={styles.rightHeader}>
        <Text style={styles.text} onPress={onPost}>
          게시
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: 'gray',
  },
  arrow: {marginHorizontal: 5},
  wrapper: {flexDirection: 'row', alignItems: 'center'},
  rightHeader: {marginHorizontal: 10},
  text: {fontSize: 23, color: palette.postScreen.headerFontColor},
});
