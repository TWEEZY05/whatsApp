import React from "react";

const Message = () => {

  const now = new Date();
const hours = now.getHours();
const minutes = now.getMinutes();

console.log(hours, minutes);
  return (
    // owner
    <div className="message">
      <div className="messageInfo">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPCXISA7AWonO3J24GKCgtJ9e4OTuaJHSBM7rcN3j28GfR6eJAJTe1Gi_AlJpG6wuFnCs&usqp=CAU"
          alt="Man pic"
        />
        <span>{hours}:{minutes}</span>
      </div>
      <div className="messageContent">
        <p>ПРИВЕТ</p>
        <img src="https://static.photocdn.pt/images/articles/2018/12/05/articles/2017_8/beginner_photography_mistakes-1.webp" alt="" />
      </div>
    </div>
  );
};

export default Message;
