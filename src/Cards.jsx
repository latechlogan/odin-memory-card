export default function Cards({ cardData }) {
  return (
    <div>
      {cardData.map((meme) => {
        return (
          <div
            className="card"
            style={{ width: "200px", height: "auto" }}
            key={meme.id}
          >
            <img src={meme.url} alt={`Meme: ${meme.name}`} />
            {meme.name}
          </div>
        );
      })}
    </div>
  );
}
