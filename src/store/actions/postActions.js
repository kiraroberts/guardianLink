export const createPost = (post) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore()
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore.collection('posts').add({
      ...post,
      authorUserName: profile.userName,
      authorID: authorId,
      postedAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_POST', post });
    }).catch((error) => {
      dispatch({ type: 'CREATE_POST_ERROR', error })
    })
  }
};