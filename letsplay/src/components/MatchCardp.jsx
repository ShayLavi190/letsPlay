import React from 'react';
import './MatchCard.css';

function MatchCardP({ name1,name2, team }) {
  return (
        <div>
          <div className="card">
            <div className="container">
              <h4><b>Players names: {name1} & {name2}</b></h4>
              <p>Team name: {team.name}</p> 
            </div>
          </div>
        </div>
  );
}

export default MatchCardP;
