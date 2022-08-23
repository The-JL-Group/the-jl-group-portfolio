import React from 'react';
import './error.css';

// Funny
import bernie from '../../assets/videos/giphy-2.gif'

// Path to Header from button
import { useNavigate } from 'react-router-dom';

const Error = () => {
  //   let navigate = useNavigate();

  // function homeLink() {
  //   navigate('/');
  // }

  return (
    <div id='error' className='error-glitch'>
      <span aria-hidden="true">Error 404</span>
      Error 404
      <span aria-hidden="true">Error 404</span>
      <img src={bernie} alt="funny"></img>
    </div>
  )
}

export default Error;