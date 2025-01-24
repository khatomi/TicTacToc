import { useState } from 'react';
import useGameLogic from './hooks/useGameLogic';
import Board from './components/Board';
import GameInfo from './components/GameInfo';
import BotSelector from './components/BotSelector';
import DifficultySelector from './components/DifficultySelector';
import './App.css';

const App = () => {
  const [isBot, setIsBot] = useState(false);
  const [difficulty, setDifficulty] = useState('easy');
  const { squares, isXNext, winner, handleClick, resetGame } = useGameLogic(isBot, difficulty);

  const status = winner
    ? `Winner: ${winner}`
    : squares.every((square) => square !== null)
      ? 'Draw!'
      : `Next player: ${isXNext ? 'X' : 'O'}`;

  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>
      <BotSelector isBot={isBot} setIsBot={setIsBot} />
      {isBot && <DifficultySelector difficulty={difficulty} setDifficulty={setDifficulty} />}
      <Board squares={squares} onClick={handleClick} />
      <GameInfo status={status} />
      <button className="reset-button" onClick={resetGame}>
        Reset Game
      </button>
    </div>
  );
};

export default App;