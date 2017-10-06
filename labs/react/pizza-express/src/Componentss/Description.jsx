import React, { Component } from 'react';
import Oven from '../images/pizzaoven.jpg'
class Description extends Component {
  render() {
    return (
      <div className="description">
          <img src={Oven} alt="pizza oven"/>
        <h1>Place your components in here!</h1>
      </div>
    );
  }
}

export default Description;
