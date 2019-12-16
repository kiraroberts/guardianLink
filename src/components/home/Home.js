import React from 'react';
import Notifications from './Notifications';
import PostList from '../posts/PostList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class Home extends React.Component {
  render(){
    const { posts } = this.props;
    return(
      <div className="home container">
        <div className="row">
          <div className="col s12 m6">
            <PostList posts={posts} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>  
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    posts: state.firestore.ordered.posts
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'posts' }
  ])
)(Home)