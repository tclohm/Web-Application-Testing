import React, { useState } from 'react';
import Dashboard from "./components/Dashboard";
import Display from "./components/Display";
import './App.css';

function App() {

  /* 
  Count Rules
  balls and strikes reset to 0 when player reaches 3 strikes or 4 balls
  balls and strikes reset to 0, hit occurs
  foul increases strikes up to 2. A foul makes 1 strikes. With 1 strike, 
  a foul makes 2 strikes. With 2 strikes, a foul has no effect
  */

  const [strikes, setStrikes] = useState(0);
  const [balls, setBalls] = useState(0);
  const [fouls, setFouls] = useState(0);

  return (
    <div className="App board">
      <Display strikes={strikes} balls={balls} />
      <Dashboard strikes={strikes} 
                 setStrikes={setStrikes} 
                 balls={balls} 
                 setBalls={setBalls} 
                 fouls={fouls}
                 setFouls={setFouls}
      />
    </div>
  );
}

export default App;
