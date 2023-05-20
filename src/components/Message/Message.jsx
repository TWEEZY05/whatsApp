import React, { useContext, useEffect, useRef } from "react";
import AppContext from "../../context";

const Message = ({ message }) => {
  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  const { messages } = useContext(AppContext);


  return (
    // owner
    <div className={messages ? "message owner" : "message "} ref={ref}>
      <div className="messageInfo">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPCXISA7AWonO3J24GKCgtJ9e4OTuaJHSBM7rcN3j28GfR6eJAJTe1Gi_AlJpG6wuFnCs&usqp=CAU"
          alt="Man pic"
        />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Message;
