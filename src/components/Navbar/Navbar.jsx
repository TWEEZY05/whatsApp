import React from "react";

import icon from "../../icons/user-icon.jpg";
import { BsFillChatLeftTextFill } from "react-icons/bs";

import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  const handleClick = () => {
    alert("на этапе разработки...");
  };

  return (
    <div className="navbar">
      <div className="user-icon">
        <img src={icon} alt="User Icon" />
      </div>
      <div className="menu">
        <ul>
          <li>
            <div>
              <button onClick={handleClick} className="chat-icon">
                <BsFillChatLeftTextFill
                  style={{ width: "25px", height: "25px" }}
                />
              </button>
            </div>
          </li>
          <li>
            <div>
              <Link to="/">
                <button className="menu-icon">ВЕРНУТЬСЯ</button>
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
