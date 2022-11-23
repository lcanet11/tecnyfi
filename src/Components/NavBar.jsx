import React from 'react'
import { Link } from "react-router-dom";

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar({login}){
    return(
      <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">&nbsp;&nbsp;TecNYfi</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {
              !login && 
              <>
              <Nav.Link as={Link} to="/">Featured Jobs</Nav.Link>
              <Nav.Link as={Link} to="/register">Register</Nav.Link>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
              <Nav.Link as={Link} to="/morejobs">More Jobs</Nav.Link>
              <Nav.Link as={Link} to="/events">Events</Nav.Link>
              </>
            }
            
            {
              login &&
              <>
              <Nav.Link as={Link} to="/">Featured Jobs</Nav.Link>
              <Nav.Link as={Link} to="/register">Register</Nav.Link>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
              <Nav.Link as={Link} to="/morejobs">More Jobs</Nav.Link>
              <Nav.Link as={Link} to="/events">Events</Nav.Link>
              <NavDropdown title="Company Portal" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/job/upload">Upload New Job</NavDropdown.Item></NavDropdown>
              </>
            }
            
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    </>
    )
  }
  
  export default NavBar; 
  