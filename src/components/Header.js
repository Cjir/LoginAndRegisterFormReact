import React, { useState } from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router'


const Header = (props) => {
    const [collapsed, setCollapsed] = useState(true);
  
    const toggleNavbar = () => setCollapsed(!collapsed);
  
    return (
      <div> 
        <Navbar color="dark" dark>
          <NavbarBrand href="/" className="mr-auto">STAGEWOOD</NavbarBrand>

          <Link to="/login" className="mr-2">
            login
          </Link>
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