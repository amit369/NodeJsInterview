
import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState("");
  return (
    <div className="App">
            <div>
              <label> Enter your name :- 
              <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
              </label>
             
            </div>
            {name}
    </div>
  );
}

export default App;
