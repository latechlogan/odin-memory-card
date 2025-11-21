export default function Scores({ currentScore, highScore }) {
  return (
    <div>
      <p>Current Streak: {currentScore}</p>
      <p>High Streak: {highScore}</p>
    </div>
  );
}
