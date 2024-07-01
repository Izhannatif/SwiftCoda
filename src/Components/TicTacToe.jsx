import React, { useState, useEffect } from 'react';

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    if (!isPlayerTurn && !winner) {
      const bestMove = getBestMove(board);
      if (bestMove !== null) {
        makeMove(bestMove, 'O');
      }
    }
  }, [isPlayerTurn, winner]);

  const makeMove = (index, player) => {
    if (!board[index] && !winner) {
      const newBoard = [...board];
      newBoard[index] = player;
      setBoard(newBoard);
      const gameResult = checkWinner(newBoard);
      if (gameResult) {
        setWinner(gameResult);
      } else {
        setIsPlayerTurn(!isPlayerTurn);
      }
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
        return board[a];
      }
    }
    if (board.every(cell => cell !== null)) {
      return 'Tie';
    }
    return null;
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsPlayerTurn(true);
    setWinner(null);
  };

  const scores = {
    X: -10,
    O: 10,
    Tie: 0
  };

  const minimax = (board, depth, isMaximizing, alpha, beta) => {
    const gameResult = checkWinner(board);
    if (gameResult) {
      return scores[gameResult];
    }

    if (isMaximizing) {
      let bestScore = -Infinity;
      for (let i = 0; i < board.length; i++) {
        if (!board[i]) {
          board[i] = 'O';
          const score = minimax(board, depth + 1, false, alpha, beta);
          board[i] = null;
          bestScore = Math.max(score, bestScore);
          alpha = Math.max(alpha, score);
          if (beta <= alpha) {
            break;
          }
        }
      }
      return bestScore;
    } else {
      let bestScore = Infinity;
      for (let i = 0; i < board.length; i++) {
        if (!board[i]) {
          board[i] = 'X';
          const score = minimax(board, depth + 1, true, alpha, beta);
          board[i] = null;
          bestScore = Math.min(score, bestScore);
          beta = Math.min(beta, score);
          if (beta <= alpha) {
            break;
          }
        }
      }
      return bestScore;
    }
  };

  const getBestMove = (board) => {
    let bestScore = -Infinity;
    let move = null;
    for (let i = 0; i < board.length; i++) {
      if (!board[i]) {
        board[i] = 'O';
        const score = minimax(board, 0, false, -Infinity, Infinity);
        board[i] = null;
        if (score > bestScore) {
          bestScore = score;
          move = i;
        }
      }
    }
    return move;
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
        <div className="winner text-center text-black">
          {winner === 'Tie' ? "It's a tie!" : `${winner} wins!`}
          <br />
          <button className='play-again-btn' onClick={resetGame}>Play Again</button>
        </div>
      )}
    </div>
  );
};

export default TicTacToe;
