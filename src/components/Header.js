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
          <Button outline color="light" className="mr-3">
            <Link
            className="mr-1 navButton"
            onClick={() => {
              localStorage.removeItem(AUTH_TOKEN)
              this.props.history.push(`/`)
            }}
          >
            logout
            </Link>
          </Button>
        ) : (
            <Button outline color="light" className="mr-3">
              <Link to="/login" className="mr-1 black navButton">
              login
              </Link>
              </Button>
          )}

        <NavbarToggler onClick={toggleNavbar} className="mr-2" />

        {/* Collapse Nav */}
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="https://github.com/Cjir/LoginAndRegisterFormReact" target="_blank">GitHub</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default withRouter(Header);