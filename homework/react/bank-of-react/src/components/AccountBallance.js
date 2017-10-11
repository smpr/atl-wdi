import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class AccountBallance extends Component {
    render() {
        return (
            <div>
                Account Ballance: {this.props.accountBallance}<br />
                <Link to="/">Home</Link><br />
                <Link to="/User">User</Link>

            </div>
        );
    }
}

export default AccountBallance;