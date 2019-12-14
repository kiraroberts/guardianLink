import React, { Component } from 'react';
import Notifications from './Notifications';
import PostList from '../posts/PostList';

class Home extends React.Component {
  render(){
    return(
      <div className="home container">
        <div className="row">
          <div className="col s12 m6">

          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
            <PostList />
          </div>
        </div>  
      </div>
    )
  }
}

export default Home