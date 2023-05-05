import React, { useContext } from 'react';
import { Button, Container, Image, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import Brand from '../../assets/icons/brand.jpg'
import { Link } from 'react-router-dom';
import './Header.css'
import { AuthContext } from '../../provider/AuthProvider';

const Header = () => {
    const { user, loading, signOutGoogle } = useContext(AuthContext)

    if (loading && !user) {
        return <></>
    }

    return (
        <div>

            <>
                {['sm'].map((expand) => (
                    <Navbar key={expand} bg="warning bg-opacity-50" expand={expand} className="mb-3 p-3">
                        <Container fluid>
                        <Link to="/" >
                            <img src={Brand} width="40"
                                height="40" alt="" /> </Link>
                            <Navbar.Brand className='fs-1 pl-3' href="#"><Link to="/" > LA TASTE  </Link> </Navbar.Brand>
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
                                        <Nav.Link className='text-dark fs-4' href="#action2">
                                            <Link to="/blog">Blog</Link>
                                        </Nav.Link>

                                    </Nav>
                                    {/* className="d-flex" */}


                                    {
                                        user ?
                                            <>

                                                <Nav>
                                                    <Link to="/profile">
                                                        <Image src={user.photoURL} alt="User" height={40} roundedCircle title='Go to Profile' />
                                                    </Link>
                                                    <Button className='btn btn-warning ms-3 my-2 my-md-0' onClick={signOutGoogle}>Logout</Button>
                                                </Nav>
                                            </>
                                            :
                                            <>
                                                <Nav>
                                                    <Button className='bg-success text-danger' variant="outline-success">
                                                        <Link to="/login">
                                                            Login</Link></Button>
                                                </Nav>
                                            </>
                                    }

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