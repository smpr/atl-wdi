import React, { Component } from 'react';
import './index.css';
import Description from './Componentss/Description.jsx'
import Contact from './Componentss/Contact.jsx'
import Menu from './Componentss/MenuList.jsx'
import Locations from './Componentss/LocationList.jsx'
import NavBar from './Componentss/Navbar.jsx'
import SplashImage from './Componentss/Splashimage.jsx'
class App extends Component {
  render() {
    return (
      <div className="Appp">
        <NavBar />
        <SplashImage />
        <Description />
        <Menu />            
        <Locations />
        <Contact />
         
      </div>
    );
  }
}

export default App;
