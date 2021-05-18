import React from 'react'
import NavBar from '../components/NavbarBilling.js';

import { Row, Col, Container, Button, ButtonGroup } from 'react-bootstrap'


function Homepage() {
    function alertClicked() {
        alert('Admin Access! Not Allowed ');
    }
    return (
        <>
            <div className="pos-header">
                 <NavBar />
            </div>
            <div className="homepage">
                <Container>
                    <Row md={12}>
                        <Col>
                            <ButtonGroup action onClick={alertClicked} className="pos-btn-group">
                                <Button variant="outline-secondary" className="pos-btn-new">New</Button>
                                <Button variant="outline-secondary" className="pos-btn-old"></Button>
                            </ButtonGroup>
                        </Col>
                    </Row>
                </Container>
                <Button className="pos-help-btn">Need Help</Button>
            </div>
        </>
    );
}

export default Homepage;
