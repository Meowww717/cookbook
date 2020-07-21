import React, { Component } from 'react';

import './itemAddForm.css';

export default class ItemAddForm extends Component {
    
    state = {
        label: '',
        details: ''
    };
    
    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        });
    };

    onLabelChange2 = (e) => {
        this.setState({
            details: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onItemAdded(this.state.label, this.state.details);
        this.setState({
            label: '',
            details: ''
        });
    };

    render() {
        return (
            <form className = 'item-add-form d-flex'
                    onSubmit = { this.onSubmit } >
                <input type = 'text'
                    className = 'form-control'
                    onChange = { this.onLabelChange }
                    placeholder = 'Add title' 
                    value = {this.state.label} />
                <input type = 'text'
                    className = 'form-control'
                    onChange = { this.onLabelChange2 }
                    placeholder = 'Add details' 
                    value = {this.state.details} />
                <button className = 'btn btn-outline-secondary' >Add</button>
            </form>
        )
    }
}