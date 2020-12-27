import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Login from './LoginComponent';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faKey } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './../styles/style.css';
import './../styles/index.css';

library.add(fab, faKey)

class App extends Component {
  render() {

    return (
      <Router>
        <div className="fluid-container">
          <div className="row">
            <div id="background" className="col-4">

            </div>
            <div className="col-8">
              <h1 id="logo" className="text-right">TraverseHill</h1>
              <Switch>
                <Route path='/login' component={Login} />
                <Redirect to='/login' />
              </Switch>
              <div className="container">
                <div className="row">
                  <div className="col-4">
                    <h5>
                      Available in
                      <FontAwesomeIcon className="mx-2" icon={["fab", "apple"]} /> IOS
                      or
                      <FontAwesomeIcon className="mx-2" icon={["fab", "android"]} /> Android
                    </h5>
                  </div>
                  <div className="col-4 text-center">
                    <h5>
                    Powered by React
                    <FontAwesomeIcon className="mx-2" icon={["fab", "react"]} />
                    </h5>
                  </div>
                  <div className="col-4 text-right">
                  <h5>
                    Supported Browsers
                    <FontAwesomeIcon className="mx-2" icon={["fab", "safari"]} />
                    <FontAwesomeIcon className="mx-2" icon={["fab", "chrome"]} />
                    <FontAwesomeIcon className="mx-2" icon={["fab", "firefox"]} />
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
