import React, { useContext } from "react";
import AppContext from "../../context";

const Search = () => {
  const { number, setNumber, chats, setChats } = useContext(AppContext);
  // Нажали ли кнопку, если да, то отобразить поле номера в чате
  const { setSearchClicked } = useContext(AppContext);

  const handleInputChange = (e) => {
    setNumber(e.target.value);
  };

  // Сохраняем все чаты в массив при нажатии на кнопку
  const handleSubmit = () => {
    setChats([number, ...chats]);
    setSearchClicked(true);
  };
  const handleChange = () => {
    setChats([number]);
    setSearchClicked(true);
  };

  return (
    <div className="search">
      <div className="searchForm">
        {/* Меняю кнопку, чтобы при добавлении 1 элемента в массив не создавались еще поля */}
        <input
          type="text"
          placeholder="Создайте чат, начная с 7"
          maxLength={11}
          value={number}
          onChange={handleInputChange}
        />
        {chats.length === 0 ? (
          <button onClick={handleSubmit}>НАЙТИ ПО НОМЕРУ</button>
        ) : (
          <button onClick={handleChange}>ОБНОВИТЬ НОМЕР</button>
        )}
      </div>
    </div>
  );
};

export default Search;
