import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import AccountBallance from './components/AccountBallance'
import User from './components/User'
import Credits from './components/Credits'
import Debits from './components/Debits'
import axios from 'axios'
import { Link } from 'react-router-dom'
class App extends Component {
  state = {
    user: {
      userName: "Bob",
      memberSince: 1950
    },
    accountBallance: 12345.67,

    debits: [],
    credits: [],
  }

  displayAllDebits = () => {

    axios.get(`http://Localhost:4000/debits`)
      .then((response) => {
        console.log(response)
        const debits = response.data;
        this.setState({ debits })
      }).catch((error) => {
        console.log(error)
      })
  }
  displayAllCredits = () => {
    axios.get('http://localhost:4000/credits')
    .then((response)=> {
      const credits = response.data;
      this.setState({credits})
    })
  }
 accountBalance =() => {
  const allDebits = this.state.debits.reduce((allDebits, debit) => {
    return allDebits + debit.amount;
  }, 0);
  const allCredits = this.state.credits.reduce((allCredits, credit) => {
    return allCredits + credit.amount;
    
  }, 0);
  return allCredits - allDebits;
 }
  
  componentWillMount() {
    this.displayAllDebits();
    this.displayAllCredits()  }
  render() {
    const totalAccountBalance =this.accountBalance();
    
    const AccountBallanceWrapper = () => {
      return (<AccountBallance
      accountBallance={totalAccountBalance} 
      />)
    }
    const UserWrapper = () => {
      return (<User 
      userName={this.state.user.userName} 
      memberSince={this.state.user.memberSince} 
      />)
    }
    const debitsWrapper = () => {
      return (<Debits
        debits={this.state.debits}
        accountBalance={totalAccountBalance}
      />)
    }
    const creditsWrapper = () => {
      return (<Credits
        credits={this.state.credits}
        accountBalance={totalAccountBalance}
      />)
    }

    
    return (
      <Router>

        <Switch>

          <Route exact path="/Account" render={AccountBallanceWrapper} />
          <Route exact path="/Debits" render={debitsWrapper} />
          <Route exact path="/Credits" render={creditsWrapper} />
          <Route exact path="/User" render={UserWrapper} />

          <Route exact path="/" component={Home} />





        </Switch>
      </Router>
    );
  }
}

export default App;