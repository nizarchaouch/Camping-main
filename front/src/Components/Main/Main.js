import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import "./main.css";
import logo from "./logoCamp.png";
import { Link } from "react-router-dom";


function Main() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand >  <img src={logo} alt="Logo" className="img-fluid" style={{maxWidth: "100px"}}  /> </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {/* <Nav.Link href=""  className="mx-4">ACCEUIL</Nav.Link> */}
            <Link to="/acceuil" className="mx-4 link">ACCEUIL</Link>
            
            <Link to="/destination" className="mx-4 link">DESTINATION</Link>
            
            <NavDropdown title="GUIDE"  id="navbarScrollingDropdown"  className="mx-4" style={{color:"red"}}>
              
              <Link to="/acceuil" className="dropdown-item link">GUIDE</Link>
             
              <Link to="/acceuil" className="dropdown-item link">GUIDE</Link>
              <NavDropdown.Divider />
               <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item> 
              <Link to="/acceuil" className="dropdown-item">GUIDE</Link>
            </NavDropdown>
            <Link to="/acceuil" className="mx-4 link">CONTACT</Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
