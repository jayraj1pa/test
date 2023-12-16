import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <div style={{backgroundColor:"#D8E0FF"}} className='d-flex justify-content-between align-items-center '>

      <Navbar>
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://www.ombrulla.com/logo.svg"
              width="150vw" // Adjust the width as needed
              height="150vh" // Adjust the height as needed
              className="d-inline-block align-top"
              style={{ maxWidth: '100%', height: 'auto' }} // Make the image responsive
            />
          </Navbar.Brand>
        </Container>
      </Navbar>

      <Navbar expand="lg" className="mt-2">
        <Container>
          <Navbar.Brand className='ms-5 text-primary fw-bold' href="#home">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">

              <NavDropdown className='ms-3 text-dark fw-bold' title="Services">
                <NavDropdown.Item className='text-dark' href="#action/3.1">AI Visual Inspection</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className='text-dark' href="#action/3.2">AI Infrastructure Inspection</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className='text-dark' href="#action/3.3">AI People Tracking</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className='text-dark' href="#action/3.4">AI Data Analytics</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown className='ms-4 text-dark fw-bold' title="Product">
                <NavDropdown.Item className='text-dark' href="#action/3.1">Asset Performance Management</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link className='ms-4 text-dark fw-bold' href="#home">About</Nav.Link>
              <Nav.Link className='ms-4 text-dark fw-bold' href="#link">Blog</Nav.Link>
              <Nav.Link className='ms-4 text-dark fw-bold' href="#link">Contact</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div>
  );
}

export default Header;
