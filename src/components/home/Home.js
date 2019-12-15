import React from 'react';
import Notifications from './Notifications';
import PostList from '../posts/PostList';
import { connect } from 'react-redux';

class Home extends React.Component {
  render(){
    console.log(this.props);
    return(
      <div className="home container">
        <div className="row">
          <div className="col s12 m6">
            <PostList />
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
    posts: state.post.posts
  }
}

export default connect(mapStateToProps)(Home)