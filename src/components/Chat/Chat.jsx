import React, { useContext, useState } from "react";
import "./Chat.scss";

import { CiMenuKebab } from "react-icons/ci";
import { IoMdSend } from "react-icons/io";
import Messages from "../Messages/Messages";
import AppContext from "../../context";

const Chat = () => {
  const {
    idInstance,
    apiTokenInstance,
    number,
    setMessages,
    messages,
    searchClicked,
    recievedMessages,
    setRecievedMessages,
  } = useContext(AppContext);

  // Сообщение, которое пишем
  const [handMessage, setHandMessage] = useState("");

  // Передаем в ссылку полученные данные и отправляем запрос
  const sendMessage = async () => {
    const url = `https://api.green-api.com/waInstance${idInstance}/SendMessage/${apiTokenInstance}`;

    // Делаем так, чтобы пустая строка не отправлялась вообще
    const trimmedMessage = handMessage.trim();
    if (trimmedMessage === "") {
      // Если сообщение пустое после обрезки, не отправляем его
      return;
    }

    // Отправляем запрос
    const payload = {
      chatId: `${number}@c.us`,
      message: trimmedMessage,
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      // console.log(data.idMessage);
      setMessages([...messages, handMessage]);
      setHandMessage("");
    } catch (error) {
      console.error(error);
    }
  };
  const handleInputChange = (event) => {
    setHandMessage(event.target.value);
  };
 // Запрос сообщений
 
  

  return (
    <div className="chat">
      <div className="chatInfo">
        {searchClicked && <span className="chatInfoNumber">{number}</span>}
        <span className="chatInfoName">WHATSAPP</span>
        <div className="chatIcons">
          <div className="chatMenu">
            <button className="menu-icon">
              <CiMenuKebab style={{ width: "20px", height: "20px" }} />
            </button>
          </div>
        </div>
      </div>
      <Messages />
      <div className="inputContainer">
        <input
          type="text"
          placeholder={"Введите сообщение"}
          value={handMessage}
          onChange={handleInputChange}
        />
        {/* <Input   /> */}
        <button onClick={sendMessage}>
          <IoMdSend style={{ width: "25px", height: "25px" }} />
        </button>
      </div>
    </div>
  );
};

export default Chat;
