import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <a href="#description">Our Story</a>
          <a href="#Menu">Menu</a>
          <h3>PIZZA-EXPRESS</h3>
          <a href="#Locations">Locations</a>
          <a href="#Contacts">Contact</a>
      </div>
    );
  }
}

export default Navbar;
