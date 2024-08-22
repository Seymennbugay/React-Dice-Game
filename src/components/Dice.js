import React, { useState, useEffect } from "react";
import "./dice.css";

export default function Dice() {
  const [playerName, setPlayerName] = useState("Player 1");
  const [player1Result, setPlayer1Result] = useState(1);
  const [player2Result, setPlayer2Result] = useState(1);
  const [resultMessage, setResultMessage] = useState("");
  const [rolling, setRolling] = useState(false);

  useEffect(() => {
    const newName = prompt("Enter your name:", playerName);
    if (newName) {
      setPlayerName(newName);
    }
  }, [playerName]);

  const rollDice = () => {
    setRolling(true);
    setResultMessage("");

    let player1IntervalResult = 1;
    let player2IntervalResult = 1;

    const interval = setInterval(() => {
      player1IntervalResult = Math.floor(Math.random() * 6) + 1;
      player2IntervalResult = Math.floor(Math.random() * 6) + 1;
      setPlayer1Result(player1IntervalResult);
      setPlayer2Result(player2IntervalResult);
    }, 100);

    setTimeout(() => {
      clearInterval(interval);
      setRolling(false);

      if (player1IntervalResult > player2IntervalResult) {
        setResultMessage(`${playerName} Wins! 🎉`);
      } else if (player1IntervalResult < player2IntervalResult) {
        setResultMessage("Player 2 Wins! 🤖");
      } else {
        setResultMessage("It's a Draw! 🤝");
      }
    }, 3000);
  };

  const changePlayerName = () => {
    const newName = prompt("Enter your name:", playerName);
    if (newName) {
      setPlayerName(newName);
    }
  };

  return (
    <div className="container text-center mt-5 gallery-container">
      <h1 className="mb-4 gallery-header">Bol Kazançlar</h1>

      <div className="row">
        <div className="col-md-6 mb-4 gallery-image-container">
          <h3 id="player1-name" className="Player1-text" onClick={changePlayerName}>
            {playerName}
          </h3>
          <img
            id="player1-dice"
            src={require(`../images/${player1Result}.png`)}
            className="img-fluid gallery-image"
            alt="Player 1 Dice"
          />
        </div>
        <div className="col-md-6 mb-4 gallery-image-container">
          <h3 className="Player2-text">Player 2</h3>
          <img
            id="player2-dice"
            src={require(`../images/${player2Result}.png`)}
            className="img-fluid gallery-image"
            alt="Player 2 Dice"
          />
        </div>
      </div>

      <h2 id="result-message" className="mb-4 gallery-header">
        {resultMessage}
      </h2>

      <button type="button" className=" gallery-like-button" onClick={rollDice} disabled={rolling}>
        <p id="button-text" className="button-text">
          {rolling ? "Rolling... 🎲" : "Try Your Chance 🎉 🥳 👯‍♂️"}
        </p>
      </button>
    </div>
  );
}
