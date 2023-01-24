import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, Alert} from 'react-native';
import {palette} from './../src/lib/colorPalette';
import PostHeader from './../src/components/PostHeader';
import {addPost} from './../src/lib/fireBaseCrud';

export default function PostScreen({navigation, route}) {
  const [post, setPost] = useState({title: '', content: ''});
  const onPost = async () => {
    try {
      const new_post = await addPost(post);
      Alert.alert('업로드 되었습니다.');
      navigation.navigate('TabsScreen');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.block}>
      <PostHeader onPost={onPost} />
      <TextInput
        onChangeText={text => setPost({...post, title: text})}
        placeholder="제목을 입력하세요"
        value={post.title}
      />
      <TextInput
        onChangeText={text => setPost({...post, content: text})}
        value={post.content}
        placeholder="내용을 입력하세요"
        multiline={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {flex: 1, backgroundColor: palette.postScreen.backgroundColor},
});
