import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import AllDebits from './AllDebits'
const Debits =(props) => {
        return (
            <div>
               <AllDebits debits={props.debits} />
            </div>
        );
    
}

export default Debits;