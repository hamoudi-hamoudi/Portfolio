import React from "react";
import "./nav.css";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineProject,
  AiOutlineBook,
  AiOutlineMessage,
} from "react-icons/ai";

const Nav: React.FC = () => {
  return (
    <nav>
      <a href="#" className="active">
        <AiOutlineHome />
      </a>
      <a href="#about">
        <AiOutlineUser />
      </a>
      <a href="#exprience">
        <AiOutlineBook />
      </a>
      <a href="#projects">
        <AiOutlineProject />
      </a>
      <a href="#contact">
        <AiOutlineMessage />
      </a>
    </nav>
  );
};

export default Nav;
