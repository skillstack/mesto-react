function Card(props) {

  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <div className="gallery__item">
      <button className="gallery__del" type="button" aria-label="Удалить место"></button>
      <img
        className="gallery__photo"
        src={props.card.link}
        alt={props.card.name}
        onClick={handleClick}
      />
      <div className="gallery__caption">
        <h2 className="gallery__title">{props.card.name}</h2>
        <div className="gallery__like-container">
          <button className="gallery__like" type="button" aria-label="Поставить сердечко"></button>
          <div className="gallery__like-counter">{props.card.likes.length}</div>
        </div>
      </div>
    </div>
  );
}

export default Card;