import React from "react";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import Image from "next/image";
import classes from "../../styles/skills.module.css";

import aws_icon from "../../public/assets/skills/aws-icon.png";
import css_icon from "../../public/assets/skills/css-icon.png";
import firebase_icon from "../../public/assets/skills/firebase-icon.png";
import github_icon from "../../public/assets/skills/github-icon.png";
import html_icon from "../../public/assets/skills/html-icon.png";
import javascript_icon from "../../public/assets/skills/javascript-icon.png";
import nextjs_icon from "../../public/assets/skills/nextjs-icon.png";
import node_icon from "../../public/assets/skills/node-icon.png";
import react_icon from "../../public/assets/skills/react-icon.png";
import tailwind_icon from "../../public/assets/skills/tailwind-icon.png";

const Skills = () => {
  return (
    <section id="skills">
      <Container>
        <SectionSubtitle subtitle="Skills" />
        <div
          className={`${classes.icon__img__gallery} d-flex gap-5 justify-content-end text-center`}>
          <div className={`${classes.icon__img}`}>
            <Image src={html_icon} alt="icon-img" />
            <p>HTML</p>
          </div>
          <div className={`${classes.icon__img} `}>
            <Image src={css_icon} alt="icon-img" />
            <p>CSS</p>
          </div>
          <div className={`${classes.icon__img} `}>
            <Image src={javascript_icon} alt="icon-img" />
            <p>Javascript</p>
          </div>
          <div className={`${classes.icon__img} `}>
            <Image src={react_icon} alt="icon-img" />
            <p>React</p>
          </div>
          <div className={`${classes.icon__img}`}>
            <Image src={nextjs_icon} alt="icon-img" />
            <p>Next.js</p>
          </div>
          </div>
          <div           className={`${classes.icon__img__gallery} d-flex gap-5 justify-content-end text-center`}>

  
          <div className={`${classes.icon__img} `}>
            <Image src={github_icon} alt="icon-img" />
            <p>Git</p>
          </div>
          <div className={`${classes.icon__img} `}>
            <Image src={tailwind_icon} alt="icon-img" />
            <p>Tailwind</p>
          </div>
          <div className={`${classes.icon__img} `}>
            <Image src={node_icon} alt="icon-img" />
            <p>Node.js</p>
          </div>
          <div className={`${classes.icon__img} `}>
            <Image src={aws_icon} alt="icon-img" />
            <p>aws</p>
          </div>
          <div className={`${classes.icon__img} `}>
            <Image src={firebase_icon} alt="icon-img" />
            <p>Firebase</p>
          </div>
        </div>
      
      </Container>
    </section>
  );
};

export default Skills;
