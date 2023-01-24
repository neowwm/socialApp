import firestore from '@react-native-firebase/firestore';

export const postsCollection = firestore().collection('Posts');

export const addPost = data => {
  return postsCollection.add(data);
};

export const fetchPosts = () => {
  return postsCollection.get();
};
