import React, { useState } from "react";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import AppContext from "./context";

// idInstance = 1101822414;
// apiTokenInstance = 4bf6020d5c9e442cab2cd9f5d6a27e5d424c1793f7b64a9e85;
// 79997177226

const App = () => {
  const [idInstance, setIdInstance] = useState("");
  const [apiTokenInstance, setApiTokenInstance] = useState("");
  const [number, setNumber] = useState("");
  const [chats, setChats] = useState([]);
  const [messages, setMessages] = useState([]);

  return (
    <AppContext.Provider
      value={{
        idInstance,
        apiTokenInstance,
        setIdInstance,
        setApiTokenInstance,
        number,
        setNumber,
        chats,
        setChats,
        messages,
        setMessages,
      }}
    >
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </AppContext.Provider>
  );
};

export default App;
