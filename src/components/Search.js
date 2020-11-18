// Import libraries
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Search extends Component {
    state = {
        text: ''
    }

    onSearchChange = (e) => {
        this.setState({ text: e.target.value })
    }

    submitHandler = (e) => {
        e.preventDefault();
        let search = this.query.value;
        let path = `/search/${search}`;
        this.props.history.push(path);
        this.props.onSearch(search);
        e.currentTarget.reset()
    }

    render() {
        return(
            <div className="main-search">
                <form className="search-form" onSubmit={this.submitHandler}>
                    <input 
                        type="search"
                        onChange={ this.onSearchChange }
                        ref={ (input) => this.query = input }
                        placeholder="Search..."
                        className="search-input"
                        required
                    />
                    <button type="submit">Search</button>
                </form>
            </div>
        )
    }
}

export default withRouter(Search);