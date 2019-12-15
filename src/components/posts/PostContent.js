import React from 'react';

const PostContent = (props) => {
  const id = props.match.params.id;
  return(
    <div className="container section post-content">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Post Title {id}</span>
          <p>Content</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Username</div>
          <div>Date</div>
        </div>
      </div>
    </div>
  )
}

export default PostContent