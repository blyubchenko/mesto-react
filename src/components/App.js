import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";
import React from "react";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  // const [isEditConfirmationPopupOpen, setEditConfirmationPopupOpen] =
  //   React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  // function handleDeleteCardClick() {
  //   setEditConfirmationPopupOpen(!isEditConfirmationPopupOpen);
  // }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setSelectedCard({});
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        name={"profile"}
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        title={"Редактировать профиль"}
        size={"large"}
        titleBtn={"Сохранить"}
      >
        <fieldset className="popup__wraper-input">
          <input
            className="popup__input"
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

      <PopupWithForm
        name={"photo"}
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        title={"Новое место"}
        size={"large"}
        titleBtn={"Создать"}
      >
        <fieldset className="popup__wraper-input">
          <input
            className="popup__input"
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
            type="url"
            id="link"
            name="link"
            placeholder="Ссылка на картинку"
            required
          />
          <span className="popup__input-error" id="link-error"></span>
        </fieldset>
      </PopupWithForm>

      <PopupWithForm
        name={"avatar"}
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        title={"Обновить аватар"}
        titleBtn={"Сохранить"}
        size={"medium"}
      >
        <fieldset className="popup__wraper-input">
          <input
            className="popup__input"
            type="url"
            id="avatar"
            name="avatar"
            placeholder="Ссылка на  аватар"
            required
          />
          <span className="popup__input-error" id="avatar-error"></span>
        </fieldset>
      </PopupWithForm>

      <PopupWithForm
        name={"confirmation"}
        //isOpen={isEditConfirmationPopupOpen}
        onClose={closeAllPopups}
        title={"Вы уверены?"}
        titleBtn={"Да"}
        size={"small"}
      />

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
