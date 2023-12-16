import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../Components/Header.css'


function Header() {
  return (
    <div className='' style={{display:'flex',justifyContent:"space-between",alignItems:'center',backgroundColor:"#D8E0FF"}}>


<Navbar  >
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://www.ombrulla.com/logo.svg"
              width="500vw"
              height="50vh"
              className="d-inline-block align-top"
            />{' '}
        
          </Navbar.Brand>
        </Container>
      </Navbar>

       <Navbar style={{marginRight:"145px"}} expand="lg" className="  mt-2">
      <Container>
        <Navbar.Brand  className='ms-5' style={{ color: 'blue', fontWeight: 'bold', fontSize: '25px' }} href="#home">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

          <NavDropdown className='ms-3' style={{ color: 'black', fontWeight: 'bold', fontSize: '25px' }} title="Services">
          <NavDropdown.Item style={{ color: '#0D0D0D', fontSize: '22px', padding: '20px' }} href="#action/3.1">AI Visual Inspection</NavDropdown.Item>
  <NavDropdown.Divider />
  <NavDropdown.Item style={{ color: 'black',fontSize: '22px',padding:"20px"  }} href="#action/3.2"> Al Infrastructure Inspection</NavDropdown.Item>
  <NavDropdown.Divider />
  <NavDropdown.Item style={{ color: 'black', fontSize: '22px',padding:"20px"  }} href="#action/3.3">AI People Traking</NavDropdown.Item>
  <NavDropdown.Divider />
  <NavDropdown.Item style={{ color: 'black', fontSize: '22px',padding:"20px"  }} href="#action/3.4">AI Data Analytics</NavDropdown.Item>
</NavDropdown>


<NavDropdown className='ms-4' style={{ color: 'black', fontWeight: 'bold', fontSize: '25px' }} title="Product">
  <NavDropdown.Item style={{ color: 'black',  fontSize: '25px' }} href="#action/3.1">Asset Performence Managment</NavDropdown.Item>
</NavDropdown>



            <Nav.Link className='ms-4' href="#home" style={{ color: 'black', fontWeight: 'bold', fontSize: '25px' }}>About</Nav.Link>
<Nav.Link className='ms-4' href="#link" style={{ color: 'black', fontWeight: 'bold', fontSize: '25px' }}>Blog</Nav.Link>
<Nav.Link className='ms-4' href="#link" style={{ color: 'black', fontWeight: 'bold', fontSize: '25px' }}>Contact</Nav.Link>



       
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    </div>
  )
}

export default Header