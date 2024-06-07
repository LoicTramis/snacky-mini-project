import React from "react";
import "./HomePage.css";
import RecipeCard from "./RecipeCard.jsx";
import recipes from "../data/database.json";

const HomePage = () => {
  return (
    <div className="home-page">
      <main className="main-content">
        <h1>SNAKY APP</h1>
        <div className="recipe-cards-container">
          {recipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              id={recipe.id}
              title={recipe.dish}
              image={recipe.picture}
              category={recipe.category}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default HomePage;
