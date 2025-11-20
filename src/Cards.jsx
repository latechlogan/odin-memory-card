import "./Cards.css";

export default function Cards({ cardData }) {
  return (
    <div className="card-grid">
      {cardData.map((meme) => {
        return <Card meme={meme} />;
      })}
    </div>
  );
}

function Card({ meme }) {
  return (
    <div className="meme-card" key={meme.id}>
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
      {/* <h2 className="meme-card__title">{meme.name}</h2> */}
    </div>
  );
}
