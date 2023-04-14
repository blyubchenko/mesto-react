function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <article className="card">
      <button
        type="button"
        className="card__basket-button"
        aria-label="Кнопка Удалить"
      ></button>
      <img
        src={props.card.link}
        alt={props.card.name}
        className="card__image"
        onClick={handleClick}
      />
      <div className="card__wraper-title">
        <h2 className="card__title">{props.card.name}</h2>
        <div className="card__like-wraper">
          <button
            type="button"
            className="card__like-button"
            aria-label="Кнопка Нравится"
          ></button>
          <span className="card__like-counter">{props.card.likes.length}</span>
        </div>
      </div>
    </article>
  );
}

export default Card;
