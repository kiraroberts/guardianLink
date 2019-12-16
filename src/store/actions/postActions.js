export const createPost = (post) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore()
    firestore.collection('posts').add({
      ...post,
      authorUserName: 'DattoWatto',
      authorID: 123,
      postedAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_POST', post });
    }).catch((error) => {
      dispatch({ type: 'CREATE_POST_ERROR', error })
    })
  }
};