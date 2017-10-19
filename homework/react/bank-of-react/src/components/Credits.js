import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import AllCredits from './AllCredits'
import AccountBalance from './AccountBallance'
const Credits =(props) => {
        return (
            <div>
                <AccountBalance accountBalance={props.accountBalance}/>
               <AllCredits credits={props.credits} />
            </div>
        );
    
}

export default Credits;