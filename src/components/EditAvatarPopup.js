import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  const avatarRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <PopupWithForm
      name="avatar"
      isOpen={props.isOpen}
      onClose={props.onClose}
      title="Обновить аватар"
      titleBtn="Сохранить"
      size="medium"
      onSubmit={handleSubmit}
      isLoading={props.isLoading}
    >
      <fieldset className="popup__wraper-input">
        <input
          className="popup__input"
          type="url"
          id="avatar"
          name="avatar"
          placeholder="Ссылка на  аватар"
          ref={avatarRef}
          required
        />
        <span className="popup__input-error" id="avatar-error"></span>
      </fieldset>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
