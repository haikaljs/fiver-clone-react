import React from "react";
import "./ProjectCard.scss";
import { Link } from "react-router-dom";

const ProjectCard = ({ card }) => {
  return (
    <Link to="/" className="link">
      <div className="projectCard">
        <div>
          <img src={card.img} />
          <div className="info">
            <img src={card.pp} alt="" />
            <div className="texts">
              <h2>{card.cat}</h2>
              <span>{card.username}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
