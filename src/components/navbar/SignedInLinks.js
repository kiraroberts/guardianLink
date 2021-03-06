import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut} from '../../store/actions/authActions';



const SignedInLinks = (props) => {

  return (
    <ul className="right" style={{fontFamily: 'Sulphur Point, sans-serif'}}>
      <li><NavLink to="/create"><span style={{ color: 'black' }}>New Post</span></NavLink></li>
      <li><a onClick={props.signOut}><span style={{ color: 'black' }}>Log Out</span></a></li>
      <li><span style={{ color: 'black'}}>Hello, {props.profile.userName}</span></li>
      <li><NavLink to="/" className="btn btn-floating grey darken-1">Pic</NavLink></li>
    </ul>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)