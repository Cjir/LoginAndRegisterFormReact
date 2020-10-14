import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Login from './components/LoginComponent';
import Register from './components/RegisterComponent';

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
        
        {/* App broswer router path for navigation */}


      </Router>
    )
  }
}

export default App;
