import React, { useState } from "react";
import NavBar from '../components/NavbarReport.js';
import DatePicker from 'react-datepicker';
import { format } from 'date-fns';
import { saveAs } from 'file-saver';
import { getDownloadFile } from '../components/DownloadFile.js';

import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Row, Col, Container, Button, InputGroup, FormControl, ListGroup, Card, Form } from 'react-bootstrap'

// get our fontawesome imports
import { faDownload, faSearch, faChartArea, faAngleRight, faUser, faCubes, faUsers, faCreditCard, faChartBar, faChartLine } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Reports() {
    const [startDate, setStartDate] = useState(new Date());

    const downloadFile = () => {
        getDownloadFile()
          .then(blob => saveAs(blob, 'report.csv'))
      }
    const handleSubmit = (event) => {
        const pos_month = format(startDate, 'L')
        if (pos_month === 5) {
          event.preventDefault();
          console.log(pos_month); 
          downloadFile();
          event.stopPropagation();
        }
      };

    return (
        <>
            <div className="pos-header">
                <NavBar />
            </div>
            <div className="pos-reports">

                <Row>
                    <Col xs={12} lg={2}>
                        <ul className="pos-ul">
                            <li>
                                <a href="#Home">
                                    <FontAwesomeIcon icon={faDownload} /> Download Reports
                                </a>
                            </li>
                        </ul>
                        <div className="pos-search">
                            <InputGroup>
                                <FormControl
                                    type="text"
                                    placeholder="Search Report"
                                    aria-label="Search"
                                    aria-describedby="btnGroupAddon"
                                />
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="btnGroupAddon"><FontAwesomeIcon icon={faSearch} /></InputGroup.Text>
                                </InputGroup.Prepend>
                            </InputGroup>
                        </div>
                        <div className="pos-panel-group">
                            <ListGroup>
                                <ListGroup.Item action className="pos-list-item">
                                    <FontAwesomeIcon icon={faChartArea} />
                                &nbsp;
                                Analytics Reports
                                &nbsp; <FontAwesomeIcon icon={faAngleRight} />
                                </ListGroup.Item>
                                <ListGroup.Item action className="pos-list-item">
                                    <FontAwesomeIcon icon={faUser} />
                                &nbsp;
                                Attendance Reports
                            </ListGroup.Item>
                                <ListGroup.Item action className="pos-list-item">
                                    <FontAwesomeIcon icon={faChartArea} />
                                &nbsp;
                                Audit Reports
                            </ListGroup.Item>
                                <ListGroup.Item action className="pos-list-item">
                                    <FontAwesomeIcon icon={faCubes} />
                                &nbsp;
                                Category/Item Wise Reports
                            </ListGroup.Item>
                                <ListGroup.Item action className="pos-list-item">
                                    <FontAwesomeIcon icon={faUsers} />
                                &nbsp;
                                CRM Reports
                            </ListGroup.Item>
                                <ListGroup.Item action className="pos-list-item">
                                    <FontAwesomeIcon icon={faCreditCard} />
                                &nbsp;
                                Prepaid Card Reports
                            </ListGroup.Item>
                             <ListGroup.Item  className="pos-list-item">
                                <FontAwesomeIcon icon={faChartBar} /> 
                                &nbsp; Daily Sales Report
                            </ListGroup.Item>
                            <ListGroup.Item  className="pos-list-item">
                                <FontAwesomeIcon icon={faChartBar} /> 
                                &nbsp; Monthly Sales Report
                            </ListGroup.Item>
                                <ListGroup.Item action className="pos-list-item">
                                    <FontAwesomeIcon icon={faChartBar} />
                                &nbsp;
                                GST Reports
                            </ListGroup.Item>
                                <ListGroup.Item action className="pos-list-item">
                                    <FontAwesomeIcon icon={faUsers} />
                                &nbsp;
                                Staff Performance Reports
                            </ListGroup.Item>
                                <ListGroup.Item action className="pos-list-item">
                                    <FontAwesomeIcon icon={faUsers} />
                                &nbsp;
                                Cash Management Reports
                            </ListGroup.Item>
                                <ListGroup.Item action className="pos-list-item">
                                    <FontAwesomeIcon icon={faUsers} />
                                &nbsp;
                                Banquet Reports
                            </ListGroup.Item>
                                <ListGroup.Item action className="pos-list-item">
                                    <FontAwesomeIcon icon={faChartLine} />
                                &nbsp;
                                Master Dashboard
                            </ListGroup.Item>
                            </ListGroup>
                        </div>
                    </Col>
                    <Col xs={12} lg={10}>
                        <Container className="pos-report-container">
                            <h4>Dialy Sales Report</h4>
                            <hr />
                            <Card className="well">
                                <Card.Body>
                                    <Form   >
                                        <Form.Group as={Row}>
                                       
                                                <Form.Group as={Col} controlId="formGridState">
                                                    <Form.Label>Deployement</Form.Label>
                                                    <Form.Control as="select" defaultValue="TIMS HOSPITAL - AHMEDABAD">
                                                        <option>CIMS HOSPITAL - AHMEDABAD</option>
                                                        <option>BJ IN HOSPITAL - AHMEDABAD</option>
                                                        <option>BJ OUT HOSPITAL - AHMEDABAD</option>
                                                    </Form.Control>
                                                </Form.Group>
                                     
                                          
                                                <Form.Group as={Col} controlId="formGridState">
                                                    <Form.Label>Date Range</Form.Label>
                                                    <br />
                                                    <DatePicker
                                                        selected={startDate}
                                                        onChange={date => setStartDate(date)}
                                                        className="pos-date-picker"
                                                        dateFormat="yyyy/MM/dd"
                                                    />          
                                                </Form.Group>
                                 
                                          
                                                <Form.Group as={Col} controlId="formGridState">
                                                    <Form.Label>Tab</Form.Label>
                                                    <Form.Control as="select" defaultValue="Select Tab">
                                                        <option>Take Out</option>
                                                        <option>Delivery</option>
                                                        <option>Swiggy</option>
                                                    </Form.Control>
                                                </Form.Group>
                                    
                                        </Form.Group>

                                        <Form.Group as={Row}>
                                            <Col sm={12}> 
                                            <Form.Check inline defaultChecked
                                                type="radio"
                                                label="Detail"
                                                name="formHorizontalRadios"
                                                id="formHorizontalRadios1"
                                            />
                                            <Form.Check inline
                                                type="radio"
                                                label="Consolidated"
                                                name="formHorizontalRadios"
                                                id="formHorizontalRadios2"
                                            />
                                            <Form.Check inline
                                                type="radio"
                                                label="Part Sales"
                                                name="formHorizontalRadios"
                                                id="formHorizontalRadios3"
                                            />
                                            </Col> 
                                        </Form.Group>
                                        <Form.Group as={Row}>
                                            <Col sm={12}>
                                                <a href="../src/doc/Daily_Sales_Revenue(2020.11.01--2020.11.30)_CIMS HOSPITAL - AHMEDABAD.csv" download="csv">
                                                    <Button type="submit">Download</Button>
                                                </a>
                                            </Col>
                                        </Form.Group>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Container>
                    </Col>
                </Row>
                <div className="">
                    <Button className="pos-update-btn">New updates</Button>
                </div>
                <Button className="pos-help-btn">Need Help</Button>
            </div>
        </>
    );
}

export default Reports;
