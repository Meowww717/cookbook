import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import data from './data/data.json'

import AppHeader from './components/appHeader/AppHeader';
import SearchPanel from './components/searchPanel/SearchPanel';
import RecipesList from './components/recipesList/RecipesList';
import ItemAddForm from './components/itemAddForm/ItemAddForm';

import './index.css';

export default class App extends Component {

  maxId = 100;

  state = {
    recipesData: [this.createRecipeItem(data[0].title, data[0].dateAded, false, data[0].details),
      this.createRecipeItem(data[1].title, data[1].dateAded, false, data[1].details),
      this.createRecipeItem(data[2].title, data[2].dateAded, false, data[2].details)],
    expression: '',
    show: false
  }; 

  createRecipeItem(label, dateAded, show, details) {

    return {
      label,
      dateAded,
      id: this.maxId++,
      show: show,
      details
    }
  };

  deleteItem = (id) => {
    this.setState(({ recipesData }) => {
      const idx = recipesData.findIndex((el) => el.id === id);

      const newArray = [
        ...recipesData.slice(0, idx),
        ...recipesData.slice(idx + 1)
      ];

      return {
        recipesData: newArray
      };
    });
  };

  showDetails = (id) => { 
    this.setState(({ recipesData }) => {
      return {
        recipesData: this.toggleProperty(recipesData, id, 'show')
      };    
    })
  };

  addItem = (text, details) => {
    const newItem = this.createRecipeItem(text, (new Date()).toLocaleDateString(), false, details);

    this.setState(({ recipesData }) => {
      const newArr = [
        ...recipesData,
        newItem
      ];

      return {
        recipesData: newArr
      };
    });

  };

  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex((el) => el.id === id);

      const oldItem = arr[idx];
      const newItem = {...oldItem, [propName]: !oldItem[propName]};

      return [
        ...arr.slice(0, idx),
        newItem,
        ...arr.slice(idx + 1)
      ];

  }

  onSearhChange = (expression) => {
    this.setState({ expression });
  };

  search(items, expression) {

    if(expression.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(expression.toLowerCase()) > -1;
    });
  }

  render() {
    const { recipesData, expression } = this.state;

    const visibleItems = this.search(recipesData, expression);
   
    const recipesCount = recipesData.length;

    return (
      <div className="cookbook-app">
        <AppHeader numberOfRecipes={recipesCount} />
        <div className="top-panel d-flex">
          <SearchPanel onSearhChange = {this.onSearhChange} />
        </div>

        <RecipesList
          recipes={visibleItems}
          onDeleted={this.deleteItem} 
          showDetails={this.showDetails} />
      
        <ItemAddForm onItemAdded={this.addItem} />

      </div>
    );
  }
}

ReactDOM.render(<App />,
  document.getElementById('root'));