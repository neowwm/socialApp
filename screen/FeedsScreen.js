import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {palette} from '../src/lib/colorPalette';
import PostCard from './PostCard';

const dummyData = [
  {
    id: 1,
    user: '철수',
    image: 'https://picsum.photos/400/300',
    title: '생일',
    userImage: 'https://picsum.photos/50',
    time: '2022-11-10',
    content: '축하해요.',
  },
  {
    id: 2,
    user: '영희',
    image: 'https://picsum.photos/300',
    title: '생일',
    userImage: 'https://picsum.photos/50',
    time: '2022-11-10',
    content: '축하해요.',
  },
  {
    id: 3,
    user: '짱구',
    image: 'https://picsum.photos/400/399',
    title: '생일',
    userImage: 'https://picsum.photos/50',
    time: '2022-11-10',
    content: '축하해요.',
  },
];

export default function FeedsScreen() {
  const [data, setData] = useState();

  useEffect(() => {
    setData(dummyData);
  }, []);

  const ItemSeparatorComponent = () => {
    return <View style={styles.separator}></View>;
  };

  const renderItem = ({item}) => {
    return (
      <PostCard
        user={item.user}
        image={item.image}
        title={item.title}
        time={item.time}
        content={item.content}
        userImage={item.userImage}
      />
    );
  };

  return (
    <View style={styles.block}>
      <FlatList
        data={data}
        renderItem={renderItem}
        ItemSeparatorComponent={ItemSeparatorComponent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {flex: 1, backgroundColor: palette.feedsScreen.backgroundColor},
  separator: {backgroundColor: 'white', height: 2},
});
