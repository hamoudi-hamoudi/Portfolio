import React, { useState } from "react";
import "./nav.css";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineProject,
  AiOutlineBook,
  AiOutlineMessage,
} from "react-icons/ai";

const Nav: React.FC = () => {
  const [navActive, setNavActive] = useState<string>("");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setNavActive("#")}
        className={navActive === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setNavActive("#about")}
        className={navActive === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#exprience"
        onClick={() => setNavActive("#exprience")}
        className={navActive === "#exprience" ? "active" : ""}
      >
        <AiOutlineBook />
      </a>
      <a
        href="#projects"
        onClick={() => setNavActive("#projects")}
        className={navActive === "#projects" ? "active" : ""}
      >
        <AiOutlineProject />
      </a>
      <a
        href="#contact"
        onClick={() => setNavActive("#contact")}
        className={navActive === "#contact" ? "active" : ""}
      >
        <AiOutlineMessage />
      </a>
    </nav>
  );
};

export default Nav;
