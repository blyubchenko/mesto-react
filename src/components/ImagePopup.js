function ImagePopup(props) {
  return (
    <div className= {`popup popup_photo-viwer ${
      props.card._id  ? "popup_opened" : ""
    } `}>
      <div className="popup__wraper">
        <button
          onClick={props.onClose}
          className="popup__button-close"
          type="button"
          aria-label="Закрыть окно"
        ></button>
        <img src={props.card.link} alt="" className="popup__image" />
        <p className="popup__description"></p>
      </div>
    </div>
  );
}
export default ImagePopup;