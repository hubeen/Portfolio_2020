import React from "react";
import Project from "../components/Project/Project";
import "./Projects.scss";
import knubot from "../assets/knubot.jpg";
import portfolio from "../assets/portfolio.png";
import nimda from "../assets/nimda.png";
import carbus from "../assets/carbus.png";
const Projects = ({ projects }) => {
  return (
    <main className="main projects nes-container is-dark is-rounded">
      {projects &&
        projects.map((project, i) => {
          return <Project key={project.id || i} project={project} />;
        })}
    </main>
  );
};

export default Projects;
Projects.defaultProps = {
  projects: [
    {
      title: "KNU BOT",
      description: "Kongju Univ. Bot Project",
      techStacks: "stacks",
      img: knubot,
      projectLink: "https://www.facebook.com/knualarm",
      codeLink: "https://github.com/hubeen/knualarm"
    },
    {
      title: "Portfolio ver.2017",
      description: "My Portfolio 2017",
      techStacks: "stacks",
      img: portfolio,
      projectLink: "https://web.archive.org/web/20190829073223/http://hubeen.kr/",
      codeLink: "https://github.com/hubeen/Portfolio_2017"
    },
    {
      title: "Cabus",
      description: "ShareTaxi App",
      techStacks: "stacks",
      img: carbus,
      projectLink: "https://www.youtube.com/watch?v=pi7fXslPWyE",
      codeLink: "https://github.com/hubeen/ShareTaxi"
    },
    {
      title: "Univ Circle Intranet",
      description: "Nimda Security Ver.1 Intranet",
      techStacks: "stacks",
      img: nimda,
      projectLink: "https://www.youtube.com/watch?v=XegTbU2tPy4",
      codeLink: "https://github.com/hubeen/nimda"
    }
  ]
};
