export const calculateWinner = (squares) => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let line of lines) {
        const [a, b, c] = line;
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
};

export const getBotMove = (squares, difficulty) => {
    const availableMoves = squares.map((val, idx) => (val === null ? idx : null)).filter((val) => val !== null);

    if (difficulty === 'easy') {
        return availableMoves[Math.floor(Math.random() * availableMoves.length)];
    }

    if (difficulty === 'medium' || difficulty === 'hard') {
        // Try to win
        for (let move of availableMoves) {
            const newSquares = [...squares];
            newSquares[move] = 'O';
            if (calculateWinner(newSquares) === 'O') {
                return move;
            }
        }

        // Block player from winning
        for (let move of availableMoves) {
            const newSquares = [...squares];
            newSquares[move] = 'X';
            if (calculateWinner(newSquares) === 'X') {
                return move;
            }
        }

        if (difficulty === 'hard') {
            // Take center if available
            if (availableMoves.includes(4)) {
                return 4;
            }

            // Take corners if available
            const corners = [0, 2, 6, 8];
            const availableCorners = corners.filter((corner) => availableMoves.includes(corner));
            if (availableCorners.length > 0) {
                return availableCorners[Math.floor(Math.random() * availableCorners.length)];
            }
        }
    }

    return availableMoves[Math.floor(Math.random() * availableMoves.length)];
};