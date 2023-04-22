import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";



const Footer = () => {
    return (
      <>
      <motion.div
      variants={textVariant()}
      >
      <p className={styles.sectionSubText}>Wanna know more about me?</p>
        <h2 className={styles.sectionHeadText}>Connect with Me.</h2>
      </motion.div>
      <div className="footer flex">
      <a target="_blank" href="https://www.linkedin.com/in/krishnaagr3/"><img src="https://img.icons8.com/fluency/96/null/linkedin.png"/></a>
      <a target="_blank" href="https://github.com/krishnagithub03"><img src="https://img.icons8.com/plasticine/100/null/github.png"/></a>
      <a target="_blank" href="https://www.codechef.com/users/krishna_agr"><img src="https://img.icons8.com/plasticine/100/null/codechef.png"/></a>
      <a target="_blank" href="https://leetcode.com/Krishna_Agrawal_/"><img src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/96/null/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-shadow-tal-revivo.png"/></a>

      </div> 
      </>
    );
  };
  

export default SectionWrapper(Footer,"Footer");




