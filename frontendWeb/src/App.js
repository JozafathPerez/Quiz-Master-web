import React, { useState } from 'react';
import StartGame from './components/StartGame';
import Game from './components/Game';
import Results from './components/Results';
import History from './components/History';

const App = () => {
  const [playerName, setPlayerName] = useState('');
  const [gameStarted, setGameStarted] = useState(false);
  const [gameEnded, setGameEnded] = useState(false);
  const [score, setScore] = useState(0);

  const startGame = () => {
    setGameStarted(true);
    setGameEnded(false);
    setScore(0);
  };

  const endGame = (finalScore) => {
    setGameStarted(false);
    setGameEnded(true);
    setScore(finalScore);
  };

  return (
    <div>
      {!gameStarted && !gameEnded && <StartGame setPlayerName={setPlayerName} startGame={startGame} />}
      {gameStarted && !gameEnded && <Game playerName={playerName} endGame={endGame} />}
      {!gameStarted && gameEnded && <Results score={score} playerName={playerName} />}
      <History />
    </div>
  );
};

export default App;
