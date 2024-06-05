import React from "react";
import "./RecipeCard.css";
const RecipeCard = ({ title, image }) => {
  return (
    <div className="recipe-card">
      <img src={image} alt={title} className="recipe-card-image" />
      <h3 className="recipe-card-title">{title}</h3>
    </div>
  );
};

export default RecipeCard;
