import React, { Component } from 'react';
import '../index.css';
class MenuItem extends Component {
  render() {
    return (
      <div className="menu-item">
          <img src={this.props.image} />
        
              <div className="menu-item-name">
              {this.props.name}
                  
                  <div className="menu-item-price">
                      Price: {this.props.price}
                      </div>
                  </div>
                  <div className="menu-description">
                        {this.props.description}
                  </div>
        
            </div>
            
     
    );
  }
}

export default MenuItem;
