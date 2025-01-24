import { useState, useEffect } from 'react';
import { calculateWinner, getBotMove } from '../utils/botLogic';

const useGameLogic = (isBot, difficulty) => {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);
    const winner = calculateWinner(squares);

    useEffect(() => {
        if (isBot && !isXNext && !winner) {
            const botMove = getBotMove(squares, difficulty);
            if (botMove !== -1) {
                const newSquares = [...squares];
                newSquares[botMove] = 'O';
                setSquares(newSquares);
                setIsXNext(true);
            }
        }
    }, [isXNext, isBot, difficulty, squares, winner]);

    const handleClick = (index) => {
        if (squares[index] || winner) return;
        const newSquares = [...squares];
        newSquares[index] = isXNext ? 'X' : 'O';
        setSquares(newSquares);
        setIsXNext(!isXNext);
    };

    const resetGame = () => {
        setSquares(Array(9).fill(null));
        setIsXNext(true);
    };

    return {
        squares,
        isXNext,
        winner,
        handleClick,
        resetGame,
    };
};

export default useGameLogic;