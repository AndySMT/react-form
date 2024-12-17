function Card({ item }) {
  return item.length > 0 ? (
    item
      .filter((e) => e.published === true)
      .map((e) => (
        <div className="card" key={e.id}>
          <img className="card-img-top" src={e.image} alt={e.title} />
          <div className="card-body">
            <h5 className="card-title">{e.title}</h5>
            <p className="card-text">{e.content}</p>
            <div>
              <span className="font-weight-bold">Build:</span>
              {e.tags.map((tag, index) => {
                if (index < e.tags.length - 1) {
                  return ` ${tag} / `;
                } else {
                  return tag;
                }
              })}
            </div>
            <a href="#" className="btn btn-primary mt-2">
              Go somewhere
            </a>
          </div>
        </div>
      ))
  ) : (
    <p>ciao</p>
  );
}
export default Card;
