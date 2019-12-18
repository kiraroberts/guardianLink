import React from 'react';
import { NavLink } from 'react-router-dom';



const SignedOutLinks = () => {
  return (
    <ul className="right" style={{ color: 'black' }, { fontFamily: 'Sulphur Point, sans-serif' }}>
      <li><NavLink to="/signup"><span style={{ color: 'black' }}>Sign Up</span></NavLink></li>
        <li><NavLink to="/signin"><span style={{ color: 'black' }}>Sign In</span></NavLink></li>
    </ul>
  )
}

export default SignedOutLinks