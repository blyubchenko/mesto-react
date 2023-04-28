import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../blocks/contexts/CurrentUserContext";

function EditProfilePopup(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");

  function handleChangeName(e) {
    setName(e.target.value);
  }
  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateUser({
      name,
      about: description,
    });
  }

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  return (
    <PopupWithForm
      name={"profile"}
      isOpen={props.isOpen}
      onClose={props.onClose}
      title={"Редактировать профиль"}
      size={"large"}
      titleBtn={"Сохранить"}
      onSubmit={handleSubmit}
      isLoading={props.isLoading}
    >
      <fieldset className="popup__wraper-input">
        <input
          className="popup__input"
          onChange={handleChangeName}
          value={name || ""}
          type="text"
          id="name"
          name="name"
          placeholder="Имя"
          minLength="2"
          maxLength="40"
          required
        />
        <span className="popup__input-error" id="name-error"></span>
        <input
          className="popup__input"
          onChange={handleChangeDescription}
          value={description || ""}
          type="text"
          id="about"
          name="about"
          placeholder="О себе"
          minLength="2"
          maxLength="200"
          required
        />
        <span className="popup__input-error" id="about-error"></span>
      </fieldset>
    </PopupWithForm>
  );
}
export default EditProfilePopup;
