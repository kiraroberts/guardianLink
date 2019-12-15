export const createPost = (post) => {
  return (dispatch, getState) => {
    //call to firebase
    dispatch({ type: 'CREATE_POST', post});
  }
}