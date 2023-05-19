import React, { useEffect, useState } from "react";
import "./Login.scss";
import { Link } from "react-router-dom";

function Login() {
  const [idInstance, setIdInstance] = useState("");
  const [apiTokenInstance, setApiTokenInstance] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">WHATSAPP</span>
        <span className="title">Регистрация</span>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Введите idInstance"
            value={idInstance}
            onChange={(e) => setIdInstance(e.target.value)}
          />
          <input
            type="text"
            placeholder="Введите apiTokenInstance"
            value={apiTokenInstance}
            onChange={(e) => setApiTokenInstance(e.target.value)}
          />

          <Link to="/home">
            <button type="submit">Войти</button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
