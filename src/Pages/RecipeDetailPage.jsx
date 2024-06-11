import React, { useState } from "react";
import { useParams } from "react-router-dom";
import recipes from "../data/database.json";
import "./RecipeDetailPage.css";

const RecipeDetailPage = () => {
  const { id } = useParams();
  const recipe = recipes.find((recipe) => recipe.id === Number(id));
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );
  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  const addToFavorites = () => {
    const updatedFavorites = [...favorites, recipe];
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div className="recipe-detail-page">
      <h1>{recipe.dish}</h1>
      <img
        src={recipe.picture}
        alt={recipe.dish}
        className="recipe-detail-image"
      />
      <h3>Category: {recipe.category}</h3>
      <br />
      <h3>Cuisine: {recipe.cuisine}</h3>
      <p className="recipe-instructions">{recipe.instructions}</p>
      <h3>Ingredients:</h3>
      <ul className="ingredient-list">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>
            {ingredient.ingredient} - {ingredient.quantity}
          </li>
        ))}
      </ul>
      <button onClick={addToFavorites} className="favorite-button">
        Add to Favorites List
      </button>
    </div>
  );
};

export default RecipeDetailPage;
