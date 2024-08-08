import React, { useState, useEffect } from 'react';

const History = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/history')
      .then((res) => res.json())
      .then((data) => setResults(data));
  }, []);

  return (
    <div>
      <h2>Historial de Resultados</h2>
      <ul>
        {results.map((result, index) => (
          <li key={index}>
            {result.playerName}: {result.score}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
