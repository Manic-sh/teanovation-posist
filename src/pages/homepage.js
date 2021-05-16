import React from 'react'
import NavBar from '../components/NavbarBilling.js';

import { Row, Col, Container, Button, ButtonGroup } from 'react-bootstrap'


function Homepage() {
    return (
        <>
            <div className="pos-header">
                 <NavBar />
            </div>
            <div className="homepage">
                <Container>
                    <Row md={12}>
                        <Col>
                            <ButtonGroup className="pos-btn-group">
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
