  
import React from 'react';
import './appHeader.css';

const AppHeader = ({numberOfRecipes}) => {
  return (
    <div className="app-header d-flex">
      <h1>Cookbook</h1>
      <h2>Total recipes {numberOfRecipes}</h2>
    </div>
  );
};

export default AppHeader;