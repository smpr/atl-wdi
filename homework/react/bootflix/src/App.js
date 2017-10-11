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
      title:'',
      year: '',
      director: '',
      genre: '',
      plot: '',
    }
  }
// had a huge help from TA's and from other students in the class. We shared lots of code while contributing our own. Im still pretty shaky on what is exactly going on as per a global scope.
  //Update these methods to make axios calls to OMDB and update this.state.movie with the response from the server
  searchByTitle = (event) => {
    event.preventDefault()
    const title = event.target.title.value
    axios.get(`http://www.omdbapi.com/?apikey=d31f1a94&t=${title}`, {
        }).then((response) => {
          console.log(response)
            this.setState({ 
              title: response.data.Title,
              year: response.data.Year, 
              director: response.data.Director,
              genre: response.data.Genre,
              plot: response.data.plot
            })
        }).catch((error) => {
            console.log(error)
        })
      
  }
//passes event down to be proceesed in handlers
  searchById = (event) => {
    event.preventDefault()
    const id = event.target.id.value
    //sets the id as a search param and passes it through
     axios.get(`http://www.omdbapi.com/?apikey=d31f1a94&i=${id}`, {
    }).then((response) => {
          console.log(response)
            this.setState({ 
              id: response.data.imdbID,
              title: response.data.Title,
              year: response.data.Year, 
              director: response.data.Director,
              genre: response.data.Genre,
              plot: response.data.plot
            })
        }).catch((error) => {
            console.log(error)
        })
  }

  //Pass _searchByTitle, _searchById, and this.state.movie to it's appropriate child components.
  render() {
    return (
      <div className="App">
        <Header />
        <Search searchById={this.searchById} searchByTitle={this.searchByTitle}/>
        <Movie  title={this.state.title} year={this.state.year} director={this.state.director} genre={this.state.genre} plot={this.state.plot} id={this.state.id} />
      </div>
    );
  }
}

export default App;
