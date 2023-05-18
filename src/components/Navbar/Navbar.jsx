import React from "react";

import icon from "../../icons/user-icon.jpg";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { CiMenuKebab } from "react-icons/ci";

import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="user-icon">
        <img src={icon} alt="User Icon" />
      </div>
      <div className="menu">
        <ul>
          <li>
            <div>
              <button className="chat-icon">
                <BsFillChatLeftTextFill style={{width: '25px', height: '25px'}} />
              </button>
            </div>
          </li>
          <li>
            <div>
              <button className="menu-icon">
                <CiMenuKebab style={{width: '25px', height: '25px'}} />
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
