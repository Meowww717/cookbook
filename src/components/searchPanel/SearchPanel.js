  
import React, { Component } from 'react';

import './searchPanel.css';

export default class SearchPanel extends Component {

  state =  {
    expression: ''
  };

  onSearhChange = (e) => {
    const expression = e.target.value;
    this.setState({ expression });
    this.props.onSearhChange(expression)
  };

  render() {
    return (
      <input type="text"
          className="form-control search-input"
          placeholder="Search recipe"
          value = { this.state.expression }
          onChange = { this.onSearhChange } />
    );
  }
}
