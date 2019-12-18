import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';


const NavBar = (props) => {
  const { auth, profile } = props;
  const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;
  return(
    <nav className="nav-wrapper white" id="logo">
      <div className="container">
        <Link to='/' className="black-text brand-logo"><i className="material-icons" id="logo" style={{fontSize: '3rem'}}>camera</i><span style={{ fontFamily: 'Permanent Marker, cursive'}}>GuardianLink</span></Link>
        { links }
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(NavBar)