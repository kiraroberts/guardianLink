import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

const PostContent = (props) => {
  const { post, auth } = props;
  if (!auth.uid) return <Redirect to='/signin' />
  if (post) {
    return(
      <div className="container section post-content">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{ post.title }</span>
            <p>{ post.content }</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by { post.authorUserName }</div>
            <div>Date</div>
          </div>
        </div>
      </div>
    )
  } else {
    return(
      <div className="container center">
        <p>Loading ...</p>
      </div>
    )
    
  }
}

const mapStateToProps = (state, componentProps) => {
  const id = componentProps.match.params.id;
  const posts = state.firestore.data.posts;
  const post = posts ? posts[id] : null;
  return {
    post: post,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'posts' }
  ])
)(PostContent)