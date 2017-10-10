import React, { Component } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import Movie from './components/Movie';
import example from './omdbExample.json'
import axios from 'axios'
class App extends Component {
  constructor(){
    super();
    this.state = {
      movie: example
    }
  }

  //Update these methods to make axios calls to OMDB and update this.state.movie with the response from the server
  searchByTitle = (title) => {
    axios.get("http://www.omdbapi.com/",{
      params: {
        api_key: "d31f1a94"
      }
    })
    .then((response)=>{
      const title = response.data.data.t
      const plot = response.data.data.plot
      const year = response.data.datay.y 
      this.setState({
        title: title
      })
    })
    console.log("Search by Title");
  }

  searchById = () => {
    console.log("Search by ID");
  }

  //Pass _searchByTitle, _searchById, and this.state.movie to it's appropriate child components.
  render() {
    return (
      <div className="App">
        <Header />
        <Search />
        <Movie searchById={this.searchById} searchByTitle={this.searchByTitle} />
      </div>
    );
  }
}

export default App;
