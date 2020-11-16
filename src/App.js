// Import libraries
import React, { Component } from 'react'


// Import API key from config.js
import apiKey from './config'

// Import App components
import SearchForm from './components/Search';
import Nav from './components/Nav';
import PhotoContainer from './components/PhotoContainer';
import Error404 from './components/PageNotFound';

class App extends Component {
  
  render() {
    return (
      <div className="main-container">
        <h1>Hello World</h1>
      </div>
    )
  }
}

export default App;
