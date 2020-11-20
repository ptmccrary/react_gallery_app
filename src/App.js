// Import libraries
import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import axios from 'axios';


// Import API key from config.js
import apiKey from './config';

// Import App components
import Search from './components/Search';
import Nav from './components/Nav';
import PhotoContainer from './components/PhotoContainer';
import PageNotFound from './components/PageNotFound';

class App extends Component {
  state = {
    images: [],
    query: '',
    loading: true,
    naruto: [],
    fitness: [],
    hypebeast: []
  }

  searchImages = (query) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&text=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(res => {
        if (query === 'naruto' || query === 'fitness'|| query ==='hypebeast') {
          this.setState({
              [query]: res.data.photos.photo,
              loading: false
          })
        } else {
          this.setState({
              images: res.data.photos.photo,
              query,
              loading: false
          });
      }
      })
      .catch(err => { console.log('Error fetching data', err) });
  }

  componentDidMount() {
    this.searchImages('naruto');
    this.searchImages('fitness');
    this.searchImages('hypebeast');
  }
  
  render() {
    return (
      <BrowserRouter>
        <div className="main-container">
          <Search onSearch={this.searchImages} />
          <Nav />
          <Switch>
            <Route exact path="/" render = { () => <Redirect to="/naruto" />} />
            <Route path="/naruto" render = { () => (this.state.loading) ? <p>Loading...</p> : <PhotoContainer query="naruto" data = {this.state.naruto}/>  }  />
            <Route path="/fitness" render = { () => (this.state.loading) ? <p>Loading...</p> : <PhotoContainer query="fitness" data = {this.state.fitness}/>  }  />
            <Route path="/hypebeast" render = { () => (this.state.loading) ? <p>Loading...</p> : <PhotoContainer query="hypebeast" data = {this.state.hypebeast}/>  }  />
            <Route path="/search/:query" render = {() => (this.state.loading) ? <p>Loading...</p> : <PhotoContainer query={ this.state.query }  data = {this.state.images}/> } />
            <Route component={ PageNotFound } />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
