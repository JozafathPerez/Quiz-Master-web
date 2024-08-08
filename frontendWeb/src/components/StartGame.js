import React, { useState } from 'react';

const StartGame = ({ setPlayerName, startGame }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlayerName(name);
    startGame();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre del jugador:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      <button type="submit">Iniciar Partida</button>
    </form>
  );
};

export default StartGame;
