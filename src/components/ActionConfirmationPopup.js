import React from "react";
import PopupWithForm from "./PopupWithForm";

function ActionConfirmationPopup(props) {
  function handleSubmit(e) {
    e.preventDefault();

    props.onDeleteCard(props.card);
  }
  return (
    <PopupWithForm
      name="confirmation"
      isOpen={props.isOpen}
      onClose={props.onClose}
      title="Вы уверены?"
      titleBtn="Да"
      size="small"
      onSubmit={handleSubmit}
    />
  );
}

export default ActionConfirmationPopup;
