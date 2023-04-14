class Api {
  constructor(cohotr, token) {
    this.cohotr = cohotr;
    this.token = token;
  }

  _processingServerResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  //получаем первоначальные карточки
  getInitialCards() {
    return fetch(`${this.cohotr}/cards`, {
      headers: this.token
    }).then(this._processingServerResponse);
  }
  //получаем информацию о пользовтеле
  getUserInfo() {
    return fetch(`${this.cohotr}/users/me`, {
      headers: this.token
    }).then(this._processingServerResponse);
  }

  getAllData() {
	return Promise.all([this.getInitialCards(), this.getUserInfo()])
  }

  //отправляем обновленную информацию о пользователе
  editUserInfo(userData) {
    return fetch(`${this.cohotr}/users/me`, {
      method: "PATCH",
      headers: this.token,
      body: JSON.stringify({
        name: userData.name,
        about: userData.about,
      }),
    }).then(this._processingServerResponse);
  }
  //отправляем созданную карточку
  createNewCard(cardData) {
    return fetch(`${this.cohotr}/cards`, {
      method: "POST",
      headers: this.token,
      body: JSON.stringify({
        name: cardData.name,
        link: cardData.link,
      }),
    }).then(this._processingServerResponse);
  }
  //поставить лайк
  addLike(cardId) {
    return fetch(`${this.cohotr}/cards/${cardId}/likes`, {
      method: "PUT",
      headers: this.token
    }).then(this._processingServerResponse);
  }
  //снятие лайка
  disLike(cardId) {
    return fetch(`${this.cohotr}/cards/${cardId}/likes`, {
      method: "DELETE",
      headers: this.token
    }).then(this._processingServerResponse);
  }
  //удаление карточки
  cardDelete(cardId) {
    return fetch(`${this.cohotr}/cards/${cardId}`, {
      method: "DELETE",
      headers: this.token
    }).then(this._processingServerResponse);
  }
  //Смена аватара
  replaceAvatar(dataAvatar) {
    return fetch(`${this.cohotr}/users/me/avatar`, {
      method: "PATCH",
      headers: this.token,
      body: JSON.stringify({
        avatar: dataAvatar.avatar,
      }),
    }).then(this._processingServerResponse);
  }
}

const api = new Api("https://nomoreparties.co/v1/cohort-62", {
  authorization: "8dd1a51b-906e-408a-a644-b2150f8e3873",
  "Content-Type": "application/json",
});

export default api;
