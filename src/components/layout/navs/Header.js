import React from 'react';
import { Navbar, Nav, NavDropdown} from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto controls-left">
              <NavDropdown
                title="GBP"
                id="collasible-nav-dropdown"
                className="mr-5"
              >
                <NavDropdown.Item href="#action/3.1">£</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  $
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  €
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to={"/"} href="#features">Home</Nav.Link>
              <Nav.Link href="#pricing">About</Nav.Link>
            </Nav>
            <Navbar.Brand href="#home" className="mx-auto">
              HARMONY
            </Navbar.Brand>
            <Nav className="mx-auto controls-right">
              <Nav.Link href="#deets">Blog</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Blog
              </Nav.Link>
              <Nav.Link as={Link} to="/basket"href="#deets">Cart</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                My Account
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
}

export default Header;

