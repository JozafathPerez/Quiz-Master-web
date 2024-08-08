import React, { useState, useEffect } from 'react';

const Results = ({ score, playerName }) => {
  useEffect(() => {
    fetch('http://localhost:5000/api/game/results', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ playerName, score }),
    });
  }, [playerName, score]);

  return (
    <div>
      <h2>Resultados</h2>
      <p>{playerName}, tu puntaje es: {score}</p>
      {score >= 6 ? <p>¡Ganaste!</p> : <p>Perdiste. Inténtalo de nuevo.</p>}
    </div>
  );
};

export default Results;
