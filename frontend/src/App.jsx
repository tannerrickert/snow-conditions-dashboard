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

  return (
  <div className="App">
    <h1>Snow Resort Dashboard</h1>

    <div className="resorts">
      {loading ? (
        <div className="resort-card">
          <h2>Brighton</h2>
          <p>Status: Loading...</p>
          <p>24hr Snow: Loading...</p>
          <p>48hr Snow: Loading...</p>
          <p>Base Depth: Loading...</p>
          <p>Season Total: Loading...</p>
        </div>
      ) : (
        resorts.map(resort => (
          <div key={resort.name} className="resort-card">
            <h2>{resort.name}</h2>
            <p>Status: {resort.status}</p>
            <p>24hr Snow: {resort.snow_24h}"</p>
            <p>48hr Snow: {resort.snow_48h}"</p>
            <p>Base Depth: {resort.base_depth}"</p>
            <p>Season Total: {resort.season_total}"</p>
          </div>
        ))
      )}
    </div>
  </div>
)
}

export default App