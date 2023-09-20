import React from 'react';
import './MatchImage.css'; 
import vsImage from '../assets/vs.png'; 
function MatchImage() {
  return (
    <div>
      <img src={vsImage} alt="VS" className="match-image"/>
    </div>
  );
}

export default MatchImage;