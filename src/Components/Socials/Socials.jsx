import React from "react";
import "../Socials/Style.scss";
import {
  AiFillLinkedin,
  AiFillMail,
  AiFillTwitterCircle,
  AiOutlineGithub,
} from "react-icons/ai";

const Socials = () => {
  return (
    <div className="icons">
      <a href="https://github.com/healer-op" target="_blank">
        <AiOutlineGithub style={{ color: "#4078c0" }} />
      </a>
      <a href="https://www.linkedin.com/in/adityasingh120/" target="_blank">
        <AiFillLinkedin style={{ color: "#0072b1 " }} />
      </a>
    </div>
  );
};

export default Socials;
