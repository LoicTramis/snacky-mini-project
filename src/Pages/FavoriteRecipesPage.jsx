import React, { useState, useEffect } from "react";
import "./FavoriteRecipesPage.css";

const FavoriteRecipesPage = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  if (favorites.length === 0) {
    return <div>No favorite recipes yet.</div>;
  }

  return (
    <div className="favorite-recipes-page">
      <h1>Favorite Recipes</h1>
      <ul className="favorite-recipes-list">
        {favorites.map((recipe, index) => (
          <li key={index} className="favorite-recipe-item">
            <h2>{recipe.dish}</h2>
            <img
              src={recipe.picture}
              alt={recipe.dish}
              className="favorite-recipe-image"
            />
            <p>{recipe.instructions}</p>
            <h3>Ingredients:</h3>
            <ul className="ingredient-list">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>
                  {ingredient.ingredient} - {ingredient.quantity}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoriteRecipesPage;
