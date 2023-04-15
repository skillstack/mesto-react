function ImagePopup(props) {

  return (
    <div className={props.card ? `popup popup_opened popup_type_img` : `popup popup_type_img`}>
      <div className="popup__img-container">
        <button
          className="popup__close-button"
          type="button"
          aria-label="Закрыть форму добавления места"
          onClick={() => props.onClose()}
        ></button>
        <figure className="popup__figure">
          <img className="popup__img" src={props.card ? props.card.link : ''} alt={props.card ? props.card.name : ''} />
          <figcaption className="popup__caption">{props.card ? props.card.name : ''}</figcaption>
        </figure>
      </div>
    </div>
  );
}

export default ImagePopup;