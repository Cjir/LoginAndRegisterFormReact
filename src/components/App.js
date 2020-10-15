import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Login from './LoginComponent';
import Register from './RegisterComponent';

class App extends Component {
  render() {
    
    const LoginPage = () => {
      return (
        <Login />
      );
    };
    const RegisterPage = () => {
      return (
        <Register />
      );
    };

    return (
        <Router>
          <div className="App">
            <Switch>
              <Route path='/login' component={LoginPage} />
              <Route path='/register' component={RegisterPage} />
              <Redirect to='/login' />
            </Switch>
          </div>
        </Router>
    )
  }
}

export default App;
