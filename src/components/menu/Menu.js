import React from 'react';
import { Container } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { Nav, NavDropdown } from 'react-bootstrap';

const Menu = () => {
    return (
        <Navbar bg="success" variant="dark" fixed="top">
            <Container>
                <Navbar.Brand href="">Juego del gato</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="https://es.reactjs.org/tutorial/tutorial.html" target="blank_">Docs React</Nav.Link>
                    <Nav.Link href="https://react-bootstrap.github.io/getting-started/introduction/" target="blank_">Docs React-Boostrap</Nav.Link>
                    <NavDropdown title="Links personales" id="basic-nav-dropdown">
                        <NavDropdown.Item href="https://github.com/diegomezcota" target="blank_">Github</NavDropdown.Item>
                        <NavDropdown.Item href="https://www.linkedin.com/in/diegomezcota/" target="blank_">LinkedIn</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Menu;
