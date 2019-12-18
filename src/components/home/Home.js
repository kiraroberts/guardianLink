import React from 'react';
import Notifications from './Notifications';
import PostList from '../posts/PostList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom'; 

class Home extends React.Component {
  render(){
    const { posts, auth, notifications } = this.props;
    if (!auth.uid) return <Redirect to='/signin' />
    return(
      <div className="home container" style={{ fontFamily: 'Sulphur Point, sans- serif' }}>
        <div className="row">
          <div className="col s12 m6">
            <PostList posts={posts} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications notifications={notifications} />
          </div>
        </div>  
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    posts: state.firestore.ordered.posts,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'posts' },
    { collection: 'notifications', limit: 5}
  ])
)(Home)