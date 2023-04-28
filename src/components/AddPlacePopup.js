import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  const placeNameRef = React.useRef();
  const placeLinkRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();

    props.onAddPlace({
      name: placeNameRef.current.value,
      link: placeLinkRef.current.value,
    });
  }
  React.useEffect(() => {
    if (props.isOpen) {
      placeNameRef.current.value = "";
      placeLinkRef.current.value = "";
    }
  }, [props.isOpen]);

  return (
    <PopupWithForm
      name={"photo"}
      isOpen={props.isOpen}
      onClose={props.onClose}
      title={"Новое место"}
      size={"large"}
      titleBtn={"Создать"}
      onSubmit={handleSubmit}
      isLoading={props.isLoading}
    >
      <fieldset className="popup__wraper-input">
        <input
          className="popup__input"
          ref={placeNameRef}
          type="text"
          id="title"
          name="name"
          placeholder="Название"
          minLength="2"
          maxLength="30"
          required
        />
        <span className="popup__input-error" id="title-error"></span>
        <input
          className="popup__input"
          ref={placeLinkRef}
          type="url"
          id="link"
          name="link"
          placeholder="Ссылка на картинку"
          required
        />
        <span className="popup__input-error" id="link-error"></span>
      </fieldset>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
