import React, { useEffect, useState } from "react";
import "./style.css";
function Square({ value, onClick }) {
  return (
    <button onClick={onClick} className="square">
      {value}
    </button>
  );
}

function TikTacToe() {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [isXTurn, setIsXturn] = useState(true);
  const [status, setStatus] = useState("");
  console.log(squares);

  function getWinner(squares) {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
    ];
    for (let i = 0; i < winningPatterns.length; i++) {
      const [x, y, z] = winningPatterns[i];
      if (
        squares[x] &&
        squares[x] === squares[y] &&
        squares[x] === squares[z]
      ) {
        return squares[x];
      }
    }
    return null;
  }
  function handleClick(getCurrentsquare) {
    let copySquares = [...squares];
    if (getWinner(copySquares) || copySquares[getCurrentsquare]) return;
    copySquares[getCurrentsquare] = isXTurn ? "x" : "o";
    setIsXturn(!isXTurn);
    setSquares(copySquares);
  }
  function handleRestart() {
    setIsXturn(true);
    setSquares(Array(9).fill(""));
  }
  useEffect(() => {
    if (!getWinner(squares) && squares.every((item) => item !== "")) {
      setStatus("this is a draw please restart the game");
    } else if (getWinner(squares)) {
      setStatus(`winner is ${getWinner(squares)} please restart the game`);
    } else {
      setStatus(`next player is ${isXTurn ? "x" : "o"}`);
    }
  }, [squares, isXTurn]);

  return (
    <div className="container">'
 
      <div className="row">
        <Square value={squares[0]} onClick={() => handleClick(0)} />
        <Square value={squares[1]} onClick={() => handleClick(1)} />
        <Square value={squares[2]} onClick={() => handleClick(2)} />
      </div>
      <div className="row">
        <Square value={squares[3]} onClick={() => handleClick(3)} />
        <Square value={squares[4]} onClick={() => handleClick(4)} />
        <Square value={squares[5]} onClick={() => handleClick(5)} />
      </div>
      <div className="row">
        <Square value={squares[6]} onClick={() => handleClick(6)} />
        <Square value={squares[7]} onClick={() => handleClick(7)} />
        <Square value={squares[8]} onClick={() => handleClick(8)} />
      </div>
      <div style={{ marginLeft: "20px" }}>
        <h1>{status}</h1>
        <button onClick={handleRestart}>restart</button>
      </div>
    </div>
  );
}

export default TikTacToe;
