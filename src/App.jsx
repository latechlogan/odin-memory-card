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
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((json) => {
        setCardData([...json.data.memes.slice(0, 12)]);
      });
  }, []);

  function handleClick(e) {
    const cardId = e.currentTarget.dataset.id;

    if (clickedCards.has(cardId)) {
      resetScore();
      resetClickedCards();
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

  function resetClickedCards() {
    setClickedCards(new Set());
  }

  function resetScore() {
    setCurrentScore(0);
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
      <Scores currentScore={currentScore} highScore={highScore} />
    </div>
  );
}

export default App;
