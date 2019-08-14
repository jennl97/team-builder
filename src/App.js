import React, { useState } from 'react';
import './App.css';

//import data from list
import data from "./data";

//import components
import Team from "./component/Team";
import TeamForm from "./component/TeamForm";

function App() {

  const [team, setTeam]=useState(data);

  const addNewTeamMember = team => {
    setTeam([...team, team]);
  }

  return (
    <div className="App">
      <div>
      <h1>Team Builder</h1>
      <TeamForm />
    </div>
    <div>
      <h2>Current Team Members</h2>
      <Team teamList={team} />
    </div>
    </div>
  );
}

export default App;
