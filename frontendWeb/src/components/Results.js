import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Results() {
  const [playerName] = useState(localStorage.getItem('playerName'));
  const [score] = useState(Number(localStorage.getItem('score')));
  const [status, setStatus] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const saveResults = async () => {
      const result = { playerName, score };
      await fetch('http://localhost:5000/api/game/results', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(result),
      });
      setStatus(score >= 6 ? '¡Ganaste!' : 'Perdiste. Inténtalo de nuevo.');
    };

    saveResults();
  }, [playerName, score]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
      <h2
        className={`text-5xl font-bold mb-6 ${
          status.includes('Ganaste') ? 'text-green-500' : 'text-red-500'
        }`}
      >
        {status}
      </h2>
      <p className="text-2xl font-medium mb-12">
        {playerName}, tu puntaje es: <span className="font-bold">{score}/10</span>
      </p>
      <div className="flex space-x-4">
        <button
          onClick={() => navigate('/')}
          className="px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Jugar de nuevo
        </button>
        <button
          onClick={() => navigate('/history')}
          className="px-6 py-3 bg-gray-500 text-white text-lg font-semibold rounded-lg hover:bg-gray-700 transition duration-300"
        >
          Ver historial
        </button>
      </div>
    </div>
  );
}

export default Results;
