import React, { useState } from "react";
import "./Chat.scss";
import Input from "../Input/Input";

import { CiMenuKebab } from "react-icons/ci";
import { IoMdSend } from "react-icons/io";
import Messages from "../Messages/Messages";

const Chat = () => {
  const [message, setMessage] = useState("");

  const idInstance = "1101822414";
  const apiTokenInstance = "4bf6020d5c9e442cab2cd9f5d6a27e5d424c1793f7b64a9e85";

  const sendMessage = async () => {
    const url = `https://api.green-api.com/waInstance${idInstance}/SendMessage/${apiTokenInstance}`;

    const payload = {
      chatId: "79997177226@c.us",
      message: `${message}`,
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
      setMessage('')
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (event) => {
    setMessage(event.target.value);
    
  };

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Имя Человека</span>
        <span>Когда был в сети</span>
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
          value={message}
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
