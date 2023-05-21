import React, { useContext } from "react";
import Message from "../../components/Message/Message";
import MessageRec from "../../components/MessageRec/MessageRec";

import "./Messages.scss";
import AppContext from "../../context";
const Messages = () => {
  const { messages, recievedMessages } = useContext(AppContext);
  return (
    <>
      <div className="messages">
        {messages.map((message, index) => (
          <Message key={index} message={message} />
        ))}
      </div>
      <div>
        {/* Если сообщений не будет, то не отрисовывать ничего */}
        {recievedMessages &&
          recievedMessages.map((message, index) => (
            <MessageRec key={index} message={message} />
          ))}
      </div>
    </>
  );
};

export default Messages;
