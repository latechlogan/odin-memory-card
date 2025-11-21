import "./Cards.css";

export default function Cards({ cardData, handleClick }) {
  const shuffledCards = shuffle(cardData);

  return (
    <div className="card-grid">
      {shuffledCards.map((meme) => {
        return <Card meme={meme} handleClick={handleClick} key={meme.id} />;
      })}
    </div>
  );
}

function Card({ meme, handleClick }) {
  return (
    <div className="meme-card" onClick={handleClick} data-id={meme.id}>
      <div
        className="meme-card__img-container"
        style={{ "--meme-url": `url(${meme.url})` }}
      >
        <img
          className="meme-card__img"
          src={meme.url}
          alt={`Meme: ${meme.name}`}
        />
      </div>
    </div>
  );
}

function shuffle(array) {
  let arrayCopy = [...array];
  let currentIndex = arrayCopy.length;
  let randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [arrayCopy[currentIndex], arrayCopy[randomIndex]] = [
      arrayCopy[randomIndex],
      arrayCopy[currentIndex],
    ];
  }

  return arrayCopy;
}
