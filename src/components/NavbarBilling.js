import React from 'react';
import { LinkContainer } from 'react-router-bootstrap'

import { Navbar, Nav } from 'react-bootstrap';
import logo from '../pos-logo.png';


// get our fontawesome imports


const NavBar = () => {
    return (
        <>
            <Navbar className="pos-nav" bg="light" expand="lg" fixed="top">
                <LinkContainer to="/">
                    <Navbar.Brand className="pos-nav-brand" href="#home">
                        <img
                            src={logo}
                            width="175"
                            height="50"
                            className="d-inline-block align-top"
                            alt="Posist Pos"
                        />
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto" variant="tabs" defaultActiveKey="/billing">
                        <Nav.Item>
                            <Nav.Link href="/billing">TAKE OUT</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="/delivery">DELIVERY</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="/swiggy" >SWIGGY</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Nav inline="true">
                    <LinkContainer to="/reports">
                        <Nav.Link className="pos-nav-link">Reports</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default NavBar;