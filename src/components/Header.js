import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar bg="white" expand="lg" fixed="top" className="shadow-sm py-3">
            <Container>
                <Navbar.Brand href="#home" className="fw-bold fs-3 text-primary">
                    Portfolio
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home" className="fw-semibold mx-2">Home</Nav.Link>
                        <Nav.Link href="#about" className="fw-semibold mx-2">About</Nav.Link>
                        <Nav.Link href="#skills" className="fw-semibold mx-2">Skills</Nav.Link>
                        <Nav.Link href="#projects" className="fw-semibold mx-2">Projects</Nav.Link>
                        <Nav.Link href="#contact" className="fw-semibold mx-2">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;