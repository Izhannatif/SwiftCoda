// import React, { useState, useEffect } from 'react';

// const TicTacToe = () => {
//   const [board, setBoard] = useState(Array(9).fill(null));
//   const [isPlayerTurn, setIsPlayerTurn] = useState(false);
//   const [winner, setWinner] = useState(null);

//   useEffect(() => {
//     if (!isPlayerTurn && !winner) {
//       const emptyIndices = board.map((val, idx) => (val === null ? idx : null)).filter(val => val !== null);
//       if (emptyIndices.length > 0) {
//         const randomMove = emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
//         makeMove(randomMove, 'O');
//       }
//     }
//   }, [isPlayerTurn]);

//   const makeMove = (index, player) => {
//     if (!board[index] && !winner) {
//       const newBoard = [...board];
//       newBoard[index] = player;
//       setBoard(newBoard);
//       checkWinner(newBoard);
//       setIsPlayerTurn(!isPlayerTurn);
//     }
//   };

//   const checkWinner = (board) => {
//     const lines = [
//       [0, 1, 2], [3, 4, 5], [6, 7, 8],
//       [0, 3, 6], [1, 4, 7], [2, 5, 8],
//       [0, 4, 8], [2, 4, 6],
//     ];
//     for (let line of lines) {
//       const [a, b, c] = line;
//       if (board[a] && board[a] === board[b] && board[a] === board[c]) {
//         setWinner(board[a]);
//       }
//     }
//     if (board.every(cell => cell !== null) && !winner) {
//       setWinner('Tie');
//     }
//   };

//   const resetGame = () => {
//     setBoard(Array(9).fill(null));
//     setIsPlayerTurn(false);
//     setWinner(null);
//   };
import React, { useState, useEffect } from 'react';

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isPlayerTurn, setIsPlayerTurn] = useState(false);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    if (!isPlayerTurn && !winner) {
      const bestMove = minimax(board, 'O'); // AI plays as 'O'
      makeMove(bestMove, 'O');
    }
  }, [isPlayerTurn, winner]);

  const makeMove = (index, player) => {
    if (!board[index] && !winner) {
      const newBoard = [...board];
      newBoard[index] = player;
      setBoard(newBoard);
      checkWinner(newBoard);
      setIsPlayerTurn(!isPlayerTurn);
    }
  };

  const checkWinner = (board) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6],
    ];
    for (let line of lines) {
      const [a, b, c] = line;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinner(board[a]);
      }
    }
    if (board.every(cell => cell !== null) && !winner) {
      setWinner('Tie');
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsPlayerTurn(false);
    setWinner(null);
  };

  // Minimax Algorithm Implementation
  const scores = {
    X: 10,
    O: -10,
    tie: 0
  };

  const minimax = (board, player) => {
    let bestScore = (player === 'O') ? -Infinity : Infinity;
    let bestMove = null;
    const emptyIndices = board.map((val, idx) => (val === null ? idx : null)).filter(val => val !== null);

    for (let i = 0; i < emptyIndices.length; i++) {
      const index = emptyIndices[i];
      let newBoard = [...board];
      newBoard[index] = player;

      const score = evaluate(newBoard, (player === 'O') ? 'X' : 'O'); // Swap player for next move

      if ((player === 'O' && score > bestScore) || (player === 'X' && score < bestScore)) {
        bestScore = score;
        bestMove = index;
      }
    }
    return bestMove;
  };

  const evaluate = (board, player) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6],
    ];
    for (let line of lines) {
      const [a, b, c] = line;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return (board[a] === player) ? scores[player] : scores['X']; // Reward for matching player or penalty for opponent
      }
    }
    return scores.tie; // Return tie score if no winner yet
  };
  return (
    <div className="tic-tac-toe">
      <div className="grid">
        {board.map((cell, idx) => (
          <div
            key={idx}
            className={`cell ${cell ? 'filled' : ''}`}
            onClick={() => isPlayerTurn && makeMove(idx, 'X')}
          >
            {cell}
          </div>
        ))}
      </div>
      {winner && (
        <div className="winner text-center  text-black">
          {winner === 'Tie' ? "It's a tie!" : `${winner} wins!`}
          <br />
          <button className='play-again-btn' onClick={resetGame}>Play Again</button>
        </div>
      )}
    </div>
  );
};

export default TicTacToe;
