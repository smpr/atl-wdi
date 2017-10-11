import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Test from './components/Test'
import AccountBallance from './components/AccountBallance'
import Nav from './components/Nav'
import User from './components/User'
import { Link } from 'react-router-dom'
class App extends Component {
  state = {
    user: {
      userName:"Bob",
      memberSince: 1950
    },
    accountBallance: 12345.67
  }

  render() {
    const AccountBallanceWrapper = () => {
      return (<AccountBallance accountBallance={this.state.accountBallance} />)
    }
    const UserWrapper = () => {
      return (<User userName={this.state.user.userName} memberSince={this.state.user.memberSince} />)
    }
    
    return (  
        <Router>
        
          <Switch>
          <Route exact path="/test" component={Test}/>
          <Route exact path="/Account" render={AccountBallanceWrapper}/>
         
          <Route exact path="/User" render={UserWrapper}/>
         
          <Route exact path="/" component={Home}/>



           

          </Switch>
        </Router>
    );
  }
}

export default App;