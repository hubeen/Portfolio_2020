import React from "react";
import "./Activite.scss";
const Activite = ({
  activite: { title, date }
  }) => {
  
  return (
    <div className="activite-container with-title is-centered nes-container is-rounded is-dark">
      <h2 className="activite-title title">{date}</h2>
      <h2 className="activite-date">{title}</h2>
    </div>
  );
};

export default Activite;
Activite.defaultProps = {
  activite: {
    title: "title",
    date: "1998.11.20",
  }
};
