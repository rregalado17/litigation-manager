import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavigationBar = () => {
  return (

<div>
  <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Litigation Manager</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/lawyers">Lawyers</Nav.Link>
            <Nav.Link href="/lawyers/new">Add Lawyer</Nav.Link>
            <Nav.Link href="/litigations">Litigations</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  </div>
  )
}

  // <div className="navbar">
  //       <NavLink
  //     className='link'
  //     to="/"
  //   >
  //   Home
  //   </NavLink>
  //   <NavLink
  //     className='link'
  //     to="/lawyers"
  //     >
  //     Lawyers
  //   </NavLink>
  //   <NavLink
  //     className='link'
  //     to="/litigations"
  //     >
  //     Litigations 
  //   </NavLink>
  //   <NavLink
  //     className='link'
  //     to="/lawyers/new"
  //     >
  //     Add Lawyer Profile
  //   </NavLink>



export default NavigationBar


    {/* <NavLink
      className='link'
      to="/"
      exact style={link}
      activeStyle={{background: '#4b616c'}}
    >
    Home
    </NavLink>
    <NavLink
      className='link'
      to="/lawyers"
      exact style={link}
      activeStyle={{background: '#4b616c'}}
      >
      Lawyers
    </NavLink>
    <NavLink
      className='link'
      to="/litigations"
      exact style={link}
      activeStyle={{background: '#4b616c'}}
      >
      Litigations 
    </NavLink>
    <NavLink
      className='link'
      to="/lawyers/new"
      exact style={link}
      activeStyle={{background: '#4b616c'}}
      >
      Add Lawyer Profile
    </NavLink> */}