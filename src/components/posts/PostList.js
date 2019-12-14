import React from 'react';

const PostList = () => {
  return(
    <div className="postList section">
      <div className="card z-depth-0 post-summary">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title">Post title</span>
          <p>Posted by {username}</p>
          <p className="grey-text">{date posted}</p>
        </div>
      </div>

      <div className="card z-depth-0 post-summary">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title">Post title</span>
          <p>Posted by {username}</p>
          <p className="grey-text">{date posted}</p>
        </div>
      </div>

      <div className="card z-depth-0 post-summary">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title">Post title</span>
          <p>Posted by {username}</p>
          <p className="grey-text">{date posted}</p>
        </div>
      </div>
    </div>
  )
}