import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class User extends Component {
    render() {
        return (
            <div>
                 UserName: {this.props.userName}<br />
                 Member Since: {this.props.memberSince}<br />
                 <Link to="/">Home</Link><br />
                 <Link to="/Account">Accounts</Link>

            </div>
        );
    }
}

export default User;