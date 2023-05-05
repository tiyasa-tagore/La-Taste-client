import React from 'react';
import { Button, Container, Form, Nav,  Navbar, Offcanvas } from 'react-bootstrap';
import Brand from '../../assets/icons/brand.jpg'
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
        
       <>
      {[ 'sm'].map((expand) => (
        <Navbar key={expand} bg="warning bg-opacity-50" expand={expand} className="mb-3 p-3">
          <Container fluid>
            <img  src={Brand}  width="40"
                        height="40" alt="" />
            <Navbar.Brand className='fs-1 pl-3' href="#">LA TASTE </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                 
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link className='text-dark fs-4' href="#action1">  
                  <Link to="/">Home</Link>
                 </Nav.Link>
                  <Nav.Link className='text-dark fs-4'href="#action2">
                  <Link to="/blog">Blog</Link>
                    </Nav.Link>
                 
                </Nav>
                <Form className="d-flex">
                  <Button className='bg-success text-danger' variant="outline-success">
                  <Link to="/login">
                    Login</Link></Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>


        </div>
    );
};

export default Header;