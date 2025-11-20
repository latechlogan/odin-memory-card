export default function Cards({ cardData }) {
  return (
    <div>
      {cardData.map((meme) => {
        return <Card meme={meme} />;
      })}
    </div>
  );
}

function Card({ meme }) {
  return (
    <div
      className="card"
      style={{ width: "200px", height: "auto" }}
      key={meme.id}
    >
      <img src={meme.url} alt={`Meme: ${meme.name}`} />
      <h2>{meme.name}</h2>
    </div>
  );
}
