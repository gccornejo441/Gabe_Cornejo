import React, { useState, useEffect } from "react";
import Toggle from "./Toggle";
import styles from "../styles/Main.module.css";
import { ImArrowDown } from "react-icons/im";
import Typewriter from "typewriter-effect";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { mainFadeUpContainer, mainFadeUp, toggleFadeLeft } from "../utils/Animations";

const Main = ({ dark, setDark }) => {
  const [toggleVisibility, setToggleVisibility] = useState(false);
  const [displayTyping, setDisplayTyping] = useState(false);

  function checkMatch() {
    const x = window.matchMedia("(min-width: 800px)");
    if (!x.matches) {
      setToggleVisibility(false);
    } else {
      setToggleVisibility(true);
    }
  }

  useEffect(() => {
    checkMatch();
    if (typeof window !== "undefined") {
      setDisplayTyping(true);
    }
  }, []);

  if (typeof window !== "undefined") {
    window.addEventListener("resize", () => {
      checkMatch();
    });
  }

  return (
    <main className={styles.maincontainer}>
      <motion.div variants={toggleFadeLeft} className={styles.togglecontainer}>
        {toggleVisibility && <Toggle dark={dark} setDark={setDark} />}
      </motion.div>
      <motion.div variants={mainFadeUpContainer} className={styles.content}>
        <div className={styles.intro}>
          <motion.p variants={mainFadeUp} className={dark ? styles.hellodark : styles.hellolight}>
            What's up? I'm
          </motion.p>
          <motion.h1 variants={mainFadeUp} className={styles.name}>
            Gabe Cornejo!
          </motion.h1>
          <motion.div variants={mainFadeUp} className={styles.titlescontainer}>
            {displayTyping && (
              <Typewriter
                options={{
                  strings: [
                    "Full-Stack Web Developer.",
                    "Front-End Engineer.",
                    "Software Engineer.",
                    "UI/UX Designer.",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            )}
          </motion.div>
          <motion.p variants={mainFadeUp} className={styles.bio}>
          As a software developer, I specialize in producing breathtaking digital experiences. At 
          <a className={dark ? styles.mainanchordark : styles.mainanchorlight} href="https://www.webworksdreams.com/" target="_blank">WebWorks Dreams</a>, I'm currently concentrating on developing user-friendly online apps for organizations.
          </motion.p>
        </div>
        <motion.div variants={mainFadeUp} className={styles.buttons}>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-40}
            className={dark ? styles.connectbtndark : styles.connectbtnlight}
          >
            <p className={styles.connect}>Connect</p>
          </Link>
          <Link
            activeClass="active"
            to="work"
            spy={true}
            smooth={true}
            offset={-40}
            className={dark ? styles.workbtndark : styles.workbtnlight}
          >
            <p className={styles.work}>View My Work</p>
            <ImArrowDown className={styles.ImArrowDown} size={25} />
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
};

export default Main;
