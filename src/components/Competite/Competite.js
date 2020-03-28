import React from "react";
import "./Competite.scss";
const Competite = ({
  competite: { title, date }
  }) => {
  
  return (
    <div className="competite-container with-title is-centered nes-container is-rounded is-dark">
      <h2 className="competite-title title">{date}</h2>
      <h2 className="competite-date">{title}</h2>
    </div>
  );
};

export default Competite;
Competite.defaultProps = {
  competite: {
    title: "title",
    date: "1998.11.20",
  }
};
