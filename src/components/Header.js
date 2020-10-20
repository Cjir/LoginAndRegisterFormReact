import React, { useState } from 'react'
import { Button, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router'
import { AUTH_TOKEN } from '../constants'


const Header = (props) => {
  const authToken = localStorage.getItem(AUTH_TOKEN)

  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="dark" dark>
        <NavbarBrand href="/" className="mr-auto">STAGEWOOD</NavbarBrand>
          
          {/* Login Logout button */}
          {authToken ? (
            <Button><Link
              onClick={() => {
                localStorage.removeItem(AUTH_TOKEN)
                this.props.history.push(`/`)
              }}
            >
              logout
            </Link></Button>
          ) : (
              <Button><Link to="/login" className="mr-1 no-underline black">
                login
              </Link></Button>
            )}

        <NavbarToggler onClick={toggleNavbar} className="mr-2" />

        {/* Collapse Nav */}
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default withRouter(Header);