import React from "react";
import './Login.scss'

function Login() {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">WHATSAPP</span>
        <span className="title">Регистрация</span>
        <form>
          <input type="text" placeholder="Введите idInstance" />
          <input type="text" placeholder="Введите apiTokenInstance" />
          <button>Войти</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
