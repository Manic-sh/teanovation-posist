import React from 'react';
import { LinkContainer } from 'react-router-bootstrap'

import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import logo from '../pos-logo.png';

// get our fontawesome imports
import { faShoppingCart, faUsers, faCubes, faChartArea, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
                        <Nav className="mr-auto">
                            <Nav.Link className="pos-nav-link" href="#home">
                                <FontAwesomeIcon icon={faShoppingCart} />
                                &nbsp; Billing
                            </Nav.Link>
                            <Nav.Link className="pos-nav-link" href="#link">
                                <FontAwesomeIcon icon={faUsers} />
                                &nbsp;Customers
                            </Nav.Link>
                            <Nav.Link className="pos-nav-link" href="#link">
                                <FontAwesomeIcon icon={faCubes} />
                                &nbsp;Enterprise Stock
                            </Nav.Link>
                            <Nav.Link className="pos-nav-link" href="#link">
                                <FontAwesomeIcon icon={faChartArea} />
                                &nbsp;Reports
                            </Nav.Link>
                            <Nav.Link className="pos-nav-link" href="#link">
                                <FontAwesomeIcon icon={faSearch} />
                                &nbsp;Find Bill
                            </Nav.Link>
                        </Nav>
                        <Nav inline="true">
                            <NavDropdown title="Cashier2.">
                                <NavDropdown.Item className="pos-dropdown-menu" href="#action/3.1">Administrator</NavDropdown.Item>
                                <NavDropdown.Item className="pos-dropdown-menu" href="#action/3.2">Stock Administrator</NavDropdown.Item>
                                <NavDropdown.Item className="pos-dropdown-menu" href="#action/3.3">Offer</NavDropdown.Item>
                                <NavDropdown.Item className="pos-dropdown-menu" href="#action/3.4">CRM</NavDropdown.Item>
                                <NavDropdown.Item className="pos-dropdown-menu" href="#action/3.5">Accounts</NavDropdown.Item>
                                <NavDropdown.Item className="pos-dropdown-menu" href="#action/3.6">Help</NavDropdown.Item>
                                <NavDropdown.Item className="pos-dropdown-menu" href="#action/3.7">Logout</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
        </>
    );
};

export default NavBar;