import React from "react";
import "./Chat.scss";
import Input from "../Input/Input";

import { CiMenuKebab } from "react-icons/ci";
import { IoMdSend } from "react-icons/io";
import Messages from "../Messages/Messages";

const Chat = () => {
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
      <Input placeholder={"Введите сообщение"} />
      <button><IoMdSend style={{ width: "25px", height: "25px" }}/></button>
      </div>
 
    </div>
  );
};

export default Chat;
