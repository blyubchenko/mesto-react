function PopupWithForm(props) {
  return (
    <div
      className={`popup popup_${props.name} ${
        props.isOpen ? "popup_opened" : ""
      } `}
    >
      <div className="popup__container">
        <button
          className="popup__button-close"
          type="button"
          aria-label="Закрыть окно"
          onClick={props.onClose}
        ></button>
        <form
          className={`popup__form popup__form_size_${props.size}`}
          name={`form-${props.name}`} //"form-edit"
          action="#"
          onSubmit={props.onSubmit}
          noValidate
        >
          <h2 className="popup__title">{props.title}</h2>
          {props.children}
          <button className="popup__button-save button-submit" type="submit">
            {props.isLoading ? "Сохранение..." : props.titleBtn}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
