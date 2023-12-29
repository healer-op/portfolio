import React from "react";
import "../Home/Style.scss";
import { motion } from "framer-motion";
import sanji from "../../Assets/Images/mek.jpg";
import { animations } from "../../Styles/Animations/Animations";
import Socials from "../../Components/Socials/Socials";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="info-section">
          <motion.h1 {...animations.h1}>
            Hi, I am <br />
            Aditya Singh
          </motion.h1>
          <motion.h3 {...animations.fade}>Data Analyst And a Full Stack Developer</motion.h3>
          <motion.p {...animations.fade}>
            If you'd like to collaborate or have any questions, <br /> feel free to
            reach out to me. I'm excited to connect with you!
          </motion.p>
          <Socials />
        </div>
        <div className="image-section">
          <img src={sanji} alt="" />
        </div>
      </div>
    </>
  );
};

export default Home;
