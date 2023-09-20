import React from 'react';
import './MatchCard.css';

function MatchCardS({ name, team }) {
  return (
        <div>
          <div className="card">
            <div className="container">
              <h4><b>Player name: {name}</b></h4>
              <p>Team name: {team.name}</p> 
            </div>
          </div>
        </div>
  );
}

export default MatchCardS;
