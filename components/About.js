import React, { useRef } from "react";
import styles from "../styles/About.module.css";
import { MdOutlinePersonOutline } from "react-icons/md";
import { motion, useAnimation, useInView } from "framer-motion";
import { scrollRevealFadeUp, initialScrollRevealFadeUp } from "../utils/Animations";

const About = ({ dark }) => {
  const aboutContainer = useRef(null);
  const isInView = useInView(aboutContainer);
  const animationControl = useAnimation();

  isInView ? animationControl.start(scrollRevealFadeUp) : "";

  return (
    <motion.div
      id="about"
      className={styles.aboutcontainer}
      initial={initialScrollRevealFadeUp}
      animate={animationControl}
      ref={aboutContainer}
    >
      <div className={styles.intro}>
        <MdOutlinePersonOutline size={50} className={dark ? styles.icondark : styles.iconlight} />
        <h1 className={dark ? styles.titledark : styles.titlelight}>
          <span className={dark ? styles.numberdark : styles.numberlight}>01.</span>About Me
        </h1>
      </div>
      <div className={dark ? styles.textcontainerdark : styles.textcontainerlight}>
        <p className={styles.text}>
          Hello! I&apos;m Gabe Cornejo, and I love math. 
        </p>
      </div>
    </motion.div>
  );
};

export default About;
