import React from 'react';
import '../pages/Homepage.css';

function Homepage() {
  function redirect() {
    window.location.href = '/stage1';
  }

  return (
    <div className='homepage'>
      <div className='textfield'>
        <h1 className='title'>WELCOME TO LETSPLAY</h1>
        <p className='desc'><b>This app will save you a lot of time and improve your game experience on your FIFA tournaments.</b></p>
        <p className='desc'><b>You will type the player names and which mode and level you want to play, and we will create for you the best tournament.</b></p>
        <button className='buttonletsplay' onClick={redirect}>Let's start</button>
      </div>
    </div>
  );
}

export default Homepage;
