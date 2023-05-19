import React, { useContext, useState } from "react";
import "./Chat.scss";

import { CiMenuKebab } from "react-icons/ci";
import { IoMdSend } from "react-icons/io";
import Messages from "../Messages/Messages";
import AppContext from "../../context";

const Chat = () => {
  const { idInstance, apiTokenInstance, number } = useContext(AppContext);
  

  console.log(idInstance);
  console.log(apiTokenInstance);
  console.log(number)

  // Сообщение, которое пишем
  const [handMessage, setHandMessage] = useState("");

  // Передаем в ссылку полученные данные и отправляем запрос
  const sendMessage = async () => {
    const url = `https://api.green-api.com/waInstance${idInstance}/SendMessage/${apiTokenInstance}`;

    const payload = {
      chatId: `${number}@c.us`,
      message: handMessage,
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      // const data = await response.json();
      // console.log(data);
      setHandMessage("");
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (event) => {
    setHandMessage(event.target.value);
  };

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{number}</span>
        {/* <span>Когда был в сети</span> */}
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
