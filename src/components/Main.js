import React, { useEffect } from "react";
import api from "../utils/api";
import Card from "./Card";

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getAllData()
      .then((res) => {
        const [initialCards, userData] = res;
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        setCards(initialCards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <img src={userAvatar} alt="Фото профиля" className="profile__avatar" />
        <button
          onClick={onEditAvatar}
          aria-label="Кнопка редактирования аватара"
          type="button"
          className="profile__avatar-button"
        ></button>
        <div className="profile__wraper-title">
          <h1 className="profile__title">{userName}</h1>
          <button
            onClick={onEditProfile}
            className="profile__edit-button"
            aria-label="Кнопка редактирования профиля"
            type="button"
          ></button>
        </div>
        <p className="profile__subtitle">{userDescription}</p>
        <button
          onClick={onAddPlace}
          className="profile__photo-button"
          aria-label="Кнопка добавить фото"
          type="button"
        ></button>
      </section>

      <section className="cards" aria-label="Галерея мест">
        {cards.map((card) => {
          return <Card card={card} onCardClick={onCardClick} key={card._id} />;
        })}
      </section>
    </main>
  );
}

export default Main;
