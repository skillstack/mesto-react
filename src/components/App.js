import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  return (
    <div className="page__container">
      <Header />
      <Main
        onEditAvatar={setIsEditAvatarPopupOpen}
        onEditProfile={setIsEditProfilePopupOpen}
        onAddPlace={setIsAddPlacePopupOpen}
        onCardClick={handleCardClick}
      />
      <Footer />

      {/* Редактирование фото профиля */}

      <PopupWithForm
        name='avatar'
        title='Обновить аватар'
        buttonText='Сохранить'
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input
          className="popup__input popup__input_type_link"
          id="link-input-avatar"
          type="url"
          name="link"
          placeholder="Ссылка на аватар"
          required
        />
        <span className="popup__input-error link-input-avatar-error"></span>
      </PopupWithForm>

      {/* Редактирование профиля */}

      <PopupWithForm
        name='profile'
        title='Редактировать профиль'
        buttonText='Сохранить'
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          className="popup__input popup__input_type_name"
          id="name-input"
          type="text"
          name="name"
          placeholder="Имя"
          minLength="2"
          maxLength="40"
          required
        />
        <span className="popup__input-error name-input-error"></span>
        <input
          className="popup__input popup__input_type_about"
          id="about-input"
          type="text"
          name="about"
          placeholder="О себе"
          minLength="2"
          maxLength="200"
          required
        />
        <span className="popup__input-error about-input-error"></span>
      </PopupWithForm>

      {/* Создание карточки места */}

      <PopupWithForm
        name='card'
        title='Новое место'
        buttonText='Создать'
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          className="popup__input popup__input_type_place"
          id="place-input"
          type="text"
          name="name"
          placeholder="Название"
          minLength="2"
          maxLength="30"
          required
        />
        <span className="popup__input-error place-input-error"></span>
        <input
          className="popup__input popup__input_type_link"
          id="link-input"
          type="url"
          name="link"
          placeholder="Ссылка на картинку"
          required
        />
        <span className="popup__input-error link-input-error"></span>
      </PopupWithForm>

      {/* Подтверждение удаления карточки места  */}

      <PopupWithForm
        name='confirm'
        title='Вы уверены?'
        buttonText='Да'
        onClose={closeAllPopups}
      />

      {/* Просмотр фото места на весь экран */}

      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />

    </div>
  );
}

export default App;
