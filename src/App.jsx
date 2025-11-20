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

  return (
    <div className="app">
      <Cards cardData={cardData} />
      <Scores />
    </div>
  );
}

export default App;
