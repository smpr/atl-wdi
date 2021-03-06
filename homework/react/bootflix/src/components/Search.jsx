import React, { Component } from 'react';

class Search extends Component {
  constructor(){
    super();
    
    this.state={}
  }
  render() {
    return (
      <section id="movie-search">
        <strong>Search by:</strong> Title <em>or</em> ID

        <div className="search">
          <form onSubmit={this.props.searchByTitle} id="title-search-form" method="get">
            <input type="text" name="title" placeholder="Enter movie title" />
            <input type="submit" value="Search for this title" />
          </form>
        </div>

        <div className="search">
          <form onSubmit={this.props.searchById} id="id-search-form" method="get">
            <input type="text" name="id" placeholder="Enter omdb movie ID" />
            <input type="submit" value="Search by ID" />
          </form>
        </div>

      </section>
    );
  }
}

export default Search;