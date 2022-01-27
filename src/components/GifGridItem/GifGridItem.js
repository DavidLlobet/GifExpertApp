import React from "react";
import "./GifGridItem.scss";

export const GifGridItem = ({ title, url }) => {
  return (
    <div className="card">
      <img className="card__image" src={url} alt={title} />
      <p className="card__title">{title}</p>
    </div>
  );
};
