export default function Scores({ currentScore, highScore }) {
  return (
    <div>
      <p>
        Meme Streak:&ensp;{currentScore}&emsp;Longest Meme Streak:&ensp;
        {highScore}
      </p>
    </div>
  );
}
