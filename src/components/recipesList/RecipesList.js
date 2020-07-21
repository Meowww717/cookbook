import React from 'react';

import RecipesListItem from '../recipeItem/RecipesListItem';
import './recipesList.css';

const  RecipesList = ({ recipes, onDeleted, showDetails }) => {

  const elements = recipes.map((item) => {
    const { id, ...itemProps } = item;

    return (
      <RecipesListItem key = {id}
        {...itemProps }
        onDeleted = { () => onDeleted(id) }
        showDetails = { () => showDetails(id) } />    
    );
  });

  return (
    <div id="accordion" className="list-group recipe-list">
      { elements }
    </div>
  );
};

export default RecipesList;