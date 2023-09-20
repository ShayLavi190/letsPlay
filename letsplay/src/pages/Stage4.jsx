import React, { useEffect, useState } from 'react';
import data from '../assets/db.json';
import './Stage4.css';
import MatchCardP from '../components/MatchCardp';
import MatchCardS from '../components/MatchCards';
import MatchImage from '../components/MatchImage';

function Stage4() {
  const queryParams = new URLSearchParams(window.location.search);
  const players = parseInt(queryParams.get('players'), 10) || 1;
  const mode = queryParams.get('mode');
  let names = queryParams.get('names');
  const league = queryParams.get('league');
  const rating = queryParams.get('rating');
  const [selectedTeams, setSelectedTeams] = useState([]);
  const [result, setResult] = useState([]);
  function createSingleMatch(leagueName)
  {
    const selectedLeague = data.leagues.find((l) => l.name === leagueName);
    if (selectedLeague) {
      const teamsSelected = selectedLeague.teams.filter((team) => team.rating === rating);
      const selectedTeamss = [];

      for (let i = 0; i < Math.min(players, teamsSelected.length); i++) {
        let index = Math.floor(Math.random() * teamsSelected.length);
        while (selectedTeamss.includes(teamsSelected[index])) {
          index = Math.floor(Math.random() * teamsSelected.length);
        }
        selectedTeamss.push(teamsSelected[index]);
      }
      setSelectedTeams(selectedTeamss);

      let res = [];
      for (let i = 0; i < names.length && i < selectedTeams.length; i++) {
        res.push({ name: names[i], team: selectedTeams[i] });
      }
      setResult(res);
    }
  }
  function createPairsMatch(leagueName)
  {
    const selectedLeague = data.leagues.find((l) => l.name === leagueName);
    if (selectedLeague) {
      const teamsSelected = selectedLeague.teams.filter((team) => team.rating === rating);
      const selectedTeamss = [];

      for (let i = 0; i < Math.min(players/2, teamsSelected.length); i++) {
        let index = Math.floor(Math.random() * teamsSelected.length);
        while (selectedTeamss.includes(teamsSelected[index])) {
          index = Math.floor(Math.random() * teamsSelected.length);
        }
        selectedTeamss.push(teamsSelected[index]);
      }
      setSelectedTeams(selectedTeamss);

      let res = [];
      let pairs = generateUniquePairs(names);
      for (let i = 0; i < pairs.length && i < selectedTeams.length; i++) {
        res.push({ name: pairs[i], team: selectedTeams[i] });
      }
      setResult(res);
    }
  }
  function generateUniquePairs(namesArray) {
    const pairs = [];
    
    while (namesArray.length >= 2) {
      const index1 = Math.floor(Math.random() * namesArray.length);
      let index2 = Math.floor(Math.random() * (namesArray.length - 1));
      
      if (index2 >= index1) {
        index2++;
      }
      const name1 = namesArray[index1];
      const name2 = namesArray[index2];
      pairs.push({ name1, name2 });
      namesArray.splice(Math.max(index1, index2), 1);
      namesArray.splice(Math.min(index1, index2), 1);
    }
  
    return pairs;
  }
  function playAgain(event) {
    event.preventDefault(); 

    const queryParams = `?names=${names}&players=${players}&mode=${mode}`;
    window.location.href = '/stage3' + queryParams;
  }
  function reset(event) {
    event.preventDefault(); 

    window.location.href = '/stage1';
  }
  useEffect(() => {   
    console.log('effect re-render');
    if (typeof names === 'string') {
      names = names.split(',');
    }
    let res = [];
    if (mode === 'singles') {
      if (league === 'La liga') {
        createSingleMatch('La liga')
        }
      if (league === 'Priemer league') {
          createSingleMatch('Priemer league')
          }
      if (league === 'Bundesliga') {
            createSingleMatch('Bundesliga')
            }
      if (league === 'Serie A') {
          createSingleMatch('Serie A')
          }
      if (league === 'Ligue 1') {
            createSingleMatch('Ligue 1')
        }
      if (league === 'International') {
          createSingleMatch('International')
      }
      if (league === 'All') {
        let selectedTeams = [];
        for(let i=0;i<names.length;i++)
        {
          let leagueindex = Math.floor(Math.random() * data.leagues.length);
          const selectedLeague = data.leagues[leagueindex];
          if (selectedLeague) {
            const teamsSelected = selectedLeague.teams.filter((team) => team.rating === rating);
            let index = Math.floor(Math.random() * teamsSelected.length);
            while (selectedTeams.includes(teamsSelected[index])) {
                index = Math.floor(Math.random() * teamsSelected.length);
              }
              selectedTeams.push(teamsSelected[index]);
            }
         }
         setSelectedTeams(selectedTeams);
         for (let i = 0; i < names.length; i++) {
           res.push({ name: names[i], team: selectedTeams[i] });
         }
         console.log('set result***', res)
         setResult(res)
      }
    }
    if (mode === 'pairs')
    {
      if (league === 'La liga') {
        createPairsMatch('La liga')
        }
      if (league === 'Priemer league') {
        createPairsMatch('Priemer league')
          }
      if (league === 'Bundesliga') {
        createPairsMatch('Bundesliga')
            }
      if (league === 'Serie A') {
        createPairsMatch('Serie A')
          }
      if (league === 'Ligue 1') {
        createPairsMatch('Ligue 1')
        }
      if (league === 'International') {
        createPairsMatch('International')
      }
      if (league === 'All') {
        const selectedTeamss = [];
        for (let i = 0; i < names.length; i++) {
          let leagueindex = Math.floor(Math.random() * data.leagues.length);
          const selectedLeague = data.leagues[leagueindex];
          if (selectedLeague) {
            const teamsSelected = selectedLeague.teams.filter((team) => team.rating === rating);
            let index = Math.floor(Math.random() * teamsSelected.length);
            while (selectedTeamss.includes(teamsSelected[index])) {
              index = Math.floor(Math.random() * teamsSelected.length);
            }
            selectedTeamss.push(teamsSelected[index]);
          }
        }
        setSelectedTeams(selectedTeamss);
        console.log(selectedTeams)
        let pairs = generateUniquePairs(names);
        let res = [];
        for (let i = 0; i < pairs.length; i++) {
          res.push({ name: pairs[i], team: selectedTeams[i] });
        }
        setResult(result)
      }
    }
  }, []);
  return (
    <>
      {result.length > 0 ? (
        <div>
          <div className='stage1' style={{overflow:"auto"}}>
            <p className='title4'><b>Starting matches</b></p>
            <div className="match-cards-container">
            {result.map((element, index) => (
                <React.Fragment key={index}>
                  <div className="match-card-pair">
                    {element.name.name2 ? (
                      <MatchCardP name1={element.name.name1} name2={element.name.name2} team={element.team} />
                    ) : (
                      <MatchCardS name={element.name} team={element.team} />
                    )}
                  </div>
                  {index % 2 === 0 && <MatchImage />}
                </React.Fragment>
              ))}
            </div>
            <div className = "buttons">
            <button className='buttonletsplay'  style={{ marginTop: '20px' }} onClick={playAgain}>Play again with diffrent teams</button>
            <button className='buttonletsplay'  style={{ marginTop: '20px' }} onClick={reset}>Reset</button>
            </div>
            </div>
        </div>
      ) : (
        <h1>loading</h1>
      )}
    </>
  );
}

export default Stage4;
