import React from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';

export default function PostCard({title, time, content, image, userImage}) {
  const {width, height} = useWindowDimensions();
  return (
    <>
      <View style={styles.userWrapper}>
        <Pressable android_ripple={{color: 'gray'}}>
          <Image source={{uri: userImage}} style={styles.userImage} />
        </Pressable>
      </View>
      <Image
        source={{uri: image}}
        style={([styles.image], {height: height * 0.3, width: width})}
        resizeMode="cover"
      />
      <View>
        <View style={styles.titleBox}>
          <Text>{title}</Text>
          <Text>{time}</Text>
        </View>
        <Text>{content}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  titleBox: {flexDirection: 'row', justifyContent: 'space-between'},
  userWrapper: {height: 40, width: 40, borderRadius: 10},
  image: {},
  userImage: {height: 40, width: 40, borderRadius: 10},
});
