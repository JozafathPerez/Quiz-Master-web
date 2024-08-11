import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function StartGame() {
  const [playerName, setPlayerName] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const startGame = () => {
    if (playerName.trim()) { // Verifica si el nombre del jugador no está vacío
      localStorage.setItem('playerName', playerName);
      navigate('/question'); // Navega a la página de preguntas
    } else {
      setError('Por favor, ingresa tu nombre antes de comenzar.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 relative">
      <h1 className="text-9xl font-extrabold mb-8 text-red-600 text-center">
        Quiz Master
      </h1>
      <input
        type="text"
        placeholder="Ingresa tu nombre"
        value={playerName}
        onChange={(e) => {
          setPlayerName(e.target.value);
          if (error) setError(''); // Limpia el mensaje de error si el usuario empieza a escribir
        }}
        className="border-2 border-gray-300 p-3 rounded mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-80"
      />
      {error && <p className="text-red-500 mb-6">{error}</p>} {/* Mensaje de error */}
      <button
        onClick={startGame}
        className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-teal-600 transition duration-300 ease-in-out"
      >
        Iniciar Partida
      </button>

      {/* Botón para ir al historial */}
      <button
        onClick={() => navigate('/history')}
        className="absolute bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out"
      >
        Ver Historial
      </button>
    </div>
  );
}

export default StartGame;
