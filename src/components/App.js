import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Login from './LoginComponent';
import Register from './RegisterComponent';
import Header from './Header';

class App extends Component {
  render() {

    return (
      <Router>
        <Header />
        <div className="container">
          <div className="row pt-3 mt-3">
            <div className="col">
              <Switch>
                <Route path='/login' component={Login} />
                <Route path='/register' component={Register} />
                <Redirect to='/login' />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
