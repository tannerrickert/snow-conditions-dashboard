import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [resorts, setResorts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8000/api/resorts')
      .then(response => response.json())
      .then(data => {
        setResorts(data.resorts);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="App"><h1>Loading...</h1></div>;
  }

  return (
    <div className="App">
      <h1>Snow Resort Dashboard</h1>
      <div className="resorts">
        {resorts.map(resort => (
          <div key={resort.name} className="resort-card">
            <h2>{resort.name}</h2>
            <p>Status: {resort.status}</p>
            <p>24hr Snow: {resort.snow_24h}"</p>
            <p>48hr Snow: {resort.snow_48h}"</p>
            <p>Base Depth: {resort.base_depth}"</p>
            <p>Season Total: {resort.season_total}"</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App