
import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
      event.preventDefault();

  }
  return (
    <div className="App">
            <div>
              <form onSubmit={handleSubmit}>
              <label> Enter your name :- 
              <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
              </label>
              <input type="submit"></input>
              </form>
            </div>
            {name}
    </div>
  );
}

export default App;
