import * as React from 'react'
import {Link} from 'react-router-dom'
import {Nav, Navbar, NavbarBrand, NavItem, NavLink} from 'reactstrap'

export const AppNavBar: React.FC = () => {
  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">Football</NavbarBrand>
      <Nav className="mr-auto" navbar>
        <NavItem>
          <NavLink tag={Link} to="/">Players</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/teams">Teams</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/profile">Profile</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  )
}
