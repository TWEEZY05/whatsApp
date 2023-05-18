import React from "react";

const Message = () => {
  return (
    <div className="message">
      <div className="messageInfo">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPCXISA7AWonO3J24GKCgtJ9e4OTuaJHSBM7rcN3j28GfR6eJAJTe1Gi_AlJpG6wuFnCs&usqp=CAU"
          alt="Man pic"
        />
        <span>Только что</span>
      </div>
      <div className="messageContent">
        <p>ПРИВЕТ</p>
      </div>
    </div>
  );
};

export default Message;
