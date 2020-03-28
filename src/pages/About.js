import React from "react";
import "./About.scss";
import Introduction from "../components/Introduction/Introduction";
import Skills from "../components/Skills/Skills";
import html from "../assets/html5.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import node from "../assets/node.png";
import sql from "../assets/sql.png";
import sass from "../assets/sass.png";
import php from "../assets/php.png";
import python from "../assets/python.png";
import csharp from "../assets/Csharp.png";

const About = ({ title, text, techStacks }) => {
  return (
    <main className="main main-about nes-container is-dark is-rounded">
      <div className="about">
        <div className="about-container">
          <Introduction title={title} text={text} />
        </div>
        <Skills techStacks={techStacks} />
      </div>
    </main>
  );
};

export default About;
About.defaultProps = {
  title: "Seunghyun Moon",
  text:
    "I'm working hard on everything and trying to find happiness and freedom.",
  techStacks: {
    fe: [
      { React: react },
      { HTML5: html },
      { CSS3: css },
      { Sass: sass },
      { Javascript: js }
    ],
    be: [
      { Node: node },
      { SQL: sql },
      { PHP: php },
      { Python: python },
      { Csharp: csharp }
    ]
  }
};
