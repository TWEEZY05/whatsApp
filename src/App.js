import React, { useState } from "react";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import AppContext from "./context";

const App = () => {
  const [idInstance, setIdInstance] = useState("");
  const [apiTokenInstance, setApiTokenInstance] = useState("");
  const [number, setNumber] = useState("");
  const [chats, setChats] = useState([]);
  const [messages, setMessages] = useState([]);
  const [recievedMessages, setRecievedMessages] = useState([]);
  const [searchClicked, setSearchClicked] = useState(false);

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
        searchClicked,
        setSearchClicked,
        recievedMessages,
        setRecievedMessages,
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
