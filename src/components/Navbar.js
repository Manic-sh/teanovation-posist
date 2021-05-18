import React from 'react';
import { LinkContainer } from 'react-router-bootstrap'

import { Navbar, Nav } from 'react-bootstrap';
import logo from '../pos-logo.png';


// get our fontawesome imports
import { faShoppingCart, faUndoAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = () => {
    function alertClicked() {
        alert('Unauthorized Access!');
    }
    return (
        <>
            <Navbar className="pos-nav" bg="light" expand="lg" fixed="top">
                <LinkContainer to="/">
                <Navbar.Brand className="pos-nav-brand" href="#home">
                    <img
                        src={ logo }
                        width="175"
                        height="50"
                        className="d-inline-block align-top"
                        alt="Posist Pos"
                    />    
                </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto" action onClick={alertClicked}>
                        <Nav.Link className="pos-nav-link" href="#home">
                            <FontAwesomeIcon icon={ faShoppingCart } />
                            &nbsp; Billing
                        </Nav.Link>
                        <Nav.Link className="pos-nav-link" href="#link">
                        <FontAwesomeIcon icon={ faUndoAlt } />
                            &nbsp;Eng
                        </Nav.Link>
                    </Nav>
                    <Nav inline="true">
                    <LinkContainer to="/login">
                        <Nav.Link className="pos-nav-link">Login</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default NavBar;