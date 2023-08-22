import React from "react";
import "./CatCard.scss";
import { Link } from "react-router-dom";

const CatCard = ({ card }) => {
  return (
    <Link to="/gig?cat=design">
      <div className="catCard">
        <div>
          <img src={card.img} />
          <span className="desc">{card.desc}</span>
          <span className="title">{card.title}</span>
        </div>
      </div>
    </Link>
  );
};

export default CatCard;
