import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const HeaderSocials: React.FC = () => {
  return (
    <div className="header__Socials">
      <a
        href="https://www.linkedin.com/in/mohammed-hussein-3b425728a/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/hamoudi-hamoudi" target="_blank">
        <BsGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
