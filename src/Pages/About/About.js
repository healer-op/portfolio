import React from "react";
import "../About/Style.scss";
import { motion } from "framer-motion";
import Heading from "../../Components/Heading/Heading";
import { animations } from "../../Styles/Animations/Animations";

import {
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoNodejs,
  BiLogoReact,
  BiLogoJava,
  BiLogoPython,
  BiLogoDocker,
  BiLogoTypescript,
  BiLogoPostgresql,
} from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { SiExpress, SiTailwindcss } from "react-icons/si";

const About = () => {
  return (
    <>
      <Heading Heading={"About me"} />
      <div className="about">
        <div className="info">
          <motion.p {...animations.fade}>
            👋 Hi Thier My Name is Aditya i am a Data Analyst and a Full Stack Software developer 
            with expertise in front-end development, experienced in 
            leading cross-functional teams.
          </motion.p>
        </div>
        <motion.div {...animations.fade} className="skills">
          <h2>Stuff i know : </h2>
          <div className="icons">
            <BiLogoJava style={{ color: "orange" }} />
            <BiLogoPython style={{ color: "deepskyblue" }} />
            <BiLogoJavascript style={{ color: "yellow" }} />
            <BiLogoReact style={{ color: "deepskyblue" }} />
            <BiLogoNodejs style={{ color: "greenyellow" }} />
            <SiExpress style={{ color: "yellow" }} />
            <BiLogoMongodb style={{ color: "green" }} />
            <BiLogoPostgresql style={{ color: "#007acc" }} />
            <BiLogoTypescript style={{ color: "#007acc" }} />
            <BiLogoDocker style={{ color: "deepskyblue" }} />
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default About;
