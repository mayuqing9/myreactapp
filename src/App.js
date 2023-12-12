import React, {useEffect, useState} from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {
  const APP_ID = "8261458d";
  const APP_KEY = "25eb968a4ea3c128f462fa861ff1786f";

  const [recipes, setRecipes] = useState([]);

useEffect ( () => {
  getRecipes();


}, []);

const getRecipes = async () => {
  const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
  const data = await response.json();
  setRecipes(data.hits);
  console.log(data.hits);
}

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type= "text" />
        <button className="search-button" type="submit">Search</button>
      </form>
      {recipes.map(recipes => (
        <Recipe key={recipes.recipe.label}
        title={recipes.recipe.label}
        calories={recipes.recipe.calories}
        image={recipes.recipe.image}  />

      ))}
    </div>
  );
}

export default App;
