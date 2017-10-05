import React, { Component } from 'react';
import './index.css';
import Description from './Components/Description.jsx'
import Contact from './Components/Contact.jsx'
import Menu from './Components/MenuList.jsx'
import Locations from './Components/LocationList.jsx'
import NavBar from './Components/Navbar.jsx'
import SplashImage from './Components/Splashimage.jsx'
class App extends Component {
  render() {
    return (
      <div className="App">
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
