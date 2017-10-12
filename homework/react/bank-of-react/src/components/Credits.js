import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import AllCredits from './AllCredits'
const Credits =(props) => {
        return (
            <div>
               <AllCredits credits={props.credits} />
            </div>
        );
    
}

export default Credits;