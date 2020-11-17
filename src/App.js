// Import libraries
import React, { Component } from 'react'
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'


// Import API key from config.js
import apiKey from './config'

// Import App components
import Search from './components/Search';
import Nav from './components/Nav';
import PhotoContainer from './components/PhotoContainer';
import Error404 from './components/PageNotFound';

class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
        <div className="main-container">
          <Search />
          <Nav />
          <Switch>
            <Route exact path="/" render = { () => <Redirect to="/" />} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
