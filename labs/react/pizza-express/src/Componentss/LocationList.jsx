import React, { Component } from 'react';
import LocationData from '../locationData.js'
import Location from './Location.jsx'
import '../index.css';
class LocationsList extends Component {
  render(){
      const location = LocationData.map((location, index)=>{
          return <Location name={location.name} address={location.address} phone={location.phone}
          />
      })
      return (
<div id="locations">
<h1>Locations</h1>
<div className="locations">
    {location}
</div>
    </div>
      )
  }
}

export default LocationsList;
