import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import FormPage from "./components/FormPage";
import ErrorPage from "./Pages/ErrorPage";
import AboutPage from "./Pages/AboutPage";
import { useState } from "react";
import recipesJSON from "./data/database.json";
import RecipeDetailPage from "./Pages/RecipeDetailPage";

function App() {
  const [recipes, setRecipes] = useState(recipesJSON);

  function addRecipe(recipe) {
    setRecipes([recipe, ...recipes]);
  }

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage recipes={recipes} />} />
        <Route path="/addRecipe" element={<FormPage addRecipe={addRecipe} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/recipe/:id" element={<RecipeDetailPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
