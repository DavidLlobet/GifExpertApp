import React from "react";
import "./GifGridItem.scss";
import "animate.css";

export const GifGridItem = ({ title, url }) => {
  return (
    <div className="card animate__animated animate__fadeIn">
      <img className="card__image" src={url} alt={title} />
      <p className="card__title">{title}</p>
    </div>
  );
};
