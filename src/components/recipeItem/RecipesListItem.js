import React, { Component } from 'react';

import './recipesListItem.css';

export default class RecipesListItem extends Component {

  render() {

    const { label, dateAded, show, onDeleted, showDetails, details } = this.props;
    const className = show ? "show" : "collapse";
    
      return (

        <div className="list-group-item card" >
          <div className="card-header" id="headingOne">
            <div className='recipe-list-item'>
               <span className="dateAded badge badge-pill badge-dark">
                {dateAded}
              </span>
              <span className="recipes-list-item-label" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                {label}
              </span>

              <button type="button"
                      className="btn btn-info"
                      onClick = {showDetails}>
                        Show details
              </button>

              <button type="button"
                      className="deleted btn btn-outline-danger btn-sm"
                      onClick = {onDeleted}>
                <i className="fa fa-trash-o" />
              </button>

            </div>
          </div>

          <div id="collapseOne" className = { className } aria-labelledby="headingOne" data-parent="#accordion">
            <div className="card-body">
              {details}
            </div>
          </div>
        </div>      
      );
  }
}
