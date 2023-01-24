import {createContext, useContext, useEffect, useMemo, useState} from 'react';
import {addPost, fetchPosts, postsCollection} from './../src/lib/fireBaseCrud';

const postsContext = createContext({
  posts: {title: '', content: ''},
  setPosts: () => {},
});
export const usePosts = () => {
  return useContext(postsContext);
};

export const PostsProvider = ({children}) => {
  const [posts, setPosts] = useState({title: '', content: ''});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const nextList = [];
    async function fetch() {
      try {
        const result = await postsCollection.get();
        result.forEach(doc => {
          nextList.push({...doc.data(), id: doc.id});
        });
        setPosts(nextList);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    }
    fetch();
  }, []);

  useEffect(() => {
    postsCollection.onSnapshot(
      querySnapshot => {
        const nextList = [];
        if (!querySnapshot.empty) {
          console.log('not empty');
          querySnapshot.forEach(documentSnapshot => {
            nextList.push({
              ...documentSnapshot.data(),
              id: documentSnapshot.id,
            });
          });
          setPosts(nextList);
          console.log('store: ', nextList, nextList.length);
        } else console.log('no record');
      },
      err => {
        console.log(err);
      },
    );
  }, []);

  const value = useMemo(() => ({posts, setPosts}), [posts]);

  return (
    <postsContext.Provider value={value}>
      {!loading && children}
    </postsContext.Provider>
  );
};

const actionsContext = createContext();
export const useActionsContext = () => {
  return useContext(actionsContext);
};

export const ActionsProvider = ({children}) => {
  const actions = useMemo(() => ({addPost}));

  return (
    <actionsContext.Provider value={actions}>
      {children}
    </actionsContext.Provider>
  );
};
