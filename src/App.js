import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { BrowserRouter } from 'react-router-dom';
import Login from './components/LoginComponent';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar dark color="primary">
            <div className="container">
              <NavbarBrand href="/">
                Stagewood
              </NavbarBrand>
            </div>
          </Navbar>
          <Login />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
