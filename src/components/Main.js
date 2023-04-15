import React from "react";
import api from "../utils/api";
import Card from "./Card";

function Main(props) {

  const [userAvatar, setUserAvatar] = React.useState();
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCard()])
      .then(([userData, listOfCards]) => {
        setUserAvatar(userData.avatar);
        setUserName(userData.name);
        setUserDescription(userData.about);
        setCards(listOfCards.reverse());
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
  }, [])

  return (
    <main className="content">
      <section className="profile">
        <button
          className="profile__edit-img-button"
          type="button"
          aria-label="Отредактировать аватар профиля"
          onClick={() => props.onEditAvatar(true)}>
          <img className="profile__photo" src={userAvatar} alt="Аватар профиля" />
        </button>
        <div className="profile__info">
          <h1 className="profile__title">{userName}</h1>
          <p className="profile__subtitle">{userDescription}</p>
          <button
            className="profile__edit-button"
            type="button"
            aria-label="Отредактировать профиль"
            onClick={() => props.onEditProfile(true)}>
          </button>
        </div>
        <button
          className="profile__add-button"
          type="button"
          aria-label="Добавить новое место"
          onClick={() => props.onAddPlace(true)}>
        </button>
      </section>
      <section className="gallery">
        {cards.map((card) => {
          return (
            <Card
              card={card}
              key={card._id}
              onCardClick={props.onCardClick}
            />
          );
        })}
      </section>
    </main>
  );
}

export default Main;