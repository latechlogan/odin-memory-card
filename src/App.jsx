import { useState, useEffect } from "react";
import "./App.css";
import Cards from "./Cards.jsx";
import Scores from "./Scores.jsx";

function App() {
  const [cardData, setCardData] = useState([]);
  const [clickedCards, setClickedCards] = useState(new Set());
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    fetchCardData();
  }, []);

  function fetchCardData() {
    let randomIndex = Math.floor(Math.random() * 40);

    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((json) => {
        setCardData([...json.data.memes.slice(randomIndex, randomIndex + 12)]);
      });
  }

  function handleClick(e) {
    const cardId = e.currentTarget.dataset.id;

    if (clickedCards.has(cardId)) {
      resetGame();
    } else {
      addToClickedCards(cardId);
      updateScore();
    }
  }

  function addToClickedCards(id) {
    setClickedCards((prevSet) => {
      const newSet = new Set(prevSet);
      newSet.add(id);
      return newSet;
    });
  }

  function resetGame() {
    setCurrentScore(0);
    setClickedCards(new Set());
    fetchCardData();
  }

  function updateScore() {
    setCurrentScore(currentScore + 1);

    if (currentScore + 1 > highScore) {
      setHighScore(currentScore + 1);
    }
  }

  return (
    <div className="app">
      <Cards cardData={cardData} handleClick={handleClick} />
      <div className="game-meta">
        <button className="new-game-button" onClick={resetGame}>
          New
          <br />
          Game
        </button>
        <div className="game-meta__copy">
          <h1 className="app__title">Meme-ory Match</h1>
          <Scores currentScore={currentScore} highScore={highScore} />
        </div>
      </div>
    </div>
  );
}

export default App;
