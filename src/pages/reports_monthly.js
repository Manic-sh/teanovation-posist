import React, { useState } from "react";
import NavBar from '../components/NavbarReport.js';
import DatePicker from 'react-datepicker';
import { format } from 'date-fns';
import axios from 'axios'
import fileDownload from 'js-file-download';

import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Row, Col, Container, Button, InputGroup, FormControl, ListGroup, Card, Form, Collapse } from 'react-bootstrap'

// get our fontawesome imports
import { faDownload, faSearch, faChartArea, faAngleRight, faUser, faCubes, faUsers, faCreditCard, faChartBar, faChartLine } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const url_oct = process.env.PUBLIC_URL + '/doc/Monthly_Sales_Summary_Detailed_Report_October_20.csv';
const url_nov = process.env.PUBLIC_URL + '/doc/Monthly_Sales_Summary_Detailed_Report_November_20.csv';
const url_dec = process.env.PUBLIC_URL + '/doc/Monthly_Sales_Summary_Detailed_Report_December_20.csv';
const url_jan = process.env.PUBLIC_URL + '/doc/Monthly_Sales_Summary_Detailed_Report_January_21.csv';
const url_feb = process.env.PUBLIC_URL + '/doc/Monthly_Sales_Summary_Detailed_Report_February_21.csv';
const url_mar = process.env.PUBLIC_URL + '/doc/Monthly_Sales_Summary_Detailed_Report_March_21.csv';
const url_apr = process.env.PUBLIC_URL + '/doc/Monthly_Sales_Summary_Detailed_Report_April_21.csv';

function ReportsMonthly() {
    const [startDate, setStartDate] = useState(new Date());
    const [open, setOpen] = useState(false);

    function alertClicked() {
        alert('Unauthorized Access!');
    }
      
    const  handleDownload = (url, filename) => {
        axios.get(url, {
          responseType: 'blob',
        })
        .then((res) => {
          fileDownload(res.data, filename)
        })
      }  
    const handleSubmit = (event) => {
        event.preventDefault();
        const pos_month = format(startDate, 'L')
        if (pos_month == 10) {
            handleDownload(url_oct, "report.csv")
        }else if (pos_month == 11) {
          handleDownload(url_nov, "report.csv")
        }else if (pos_month == 12) {
            handleDownload(url_dec, "report.csv")
        }else if (pos_month == 1) {
            handleDownload(url_jan, "report.csv")
        }else if (pos_month == 2) {
            handleDownload(url_feb, "report.csv")
        }else if (pos_month == 3) {
            handleDownload(url_mar, "report.csv")
        }else if (pos_month == 4) {
            handleDownload(url_apr, "report.csv")
        }else {
            console.log("No File");
        }
        
        event.stopPropagation();
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
                                <ListGroup.Item action onClick={alertClicked} className="pos-list-item">
                                    <FontAwesomeIcon icon={faChartArea} />
                                &nbsp;
                                    Analytics Reports
                                &nbsp; <FontAwesomeIcon icon={faAngleRight} />
                                </ListGroup.Item>
                                <ListGroup.Item action onClick={alertClicked} className="pos-list-item">
                                    <FontAwesomeIcon icon={faUser} />
                                &nbsp;
                                Attendance Reports
                            </ListGroup.Item>
                                <ListGroup.Item action onClick={alertClicked} className="pos-list-item">
                                    <FontAwesomeIcon icon={faChartArea} />
                                &nbsp;
                                Audit Reports
                            </ListGroup.Item>
                                <ListGroup.Item action onClick={alertClicked} className="pos-list-item">
                                    <FontAwesomeIcon icon={faCubes} />
                                &nbsp;
                                Category/Item Wise Reports
                            </ListGroup.Item>
                                <ListGroup.Item action onClick={alertClicked} className="pos-list-item">
                                    <FontAwesomeIcon icon={faUsers} />
                                &nbsp;
                                CRM Reports
                            </ListGroup.Item>
                                <ListGroup.Item action onClick={alertClicked} className="pos-list-item">
                                    <FontAwesomeIcon icon={faCreditCard} />
                                &nbsp;
                                Prepaid Card Reports
                            </ListGroup.Item>
                            <ListGroup.Item className="pos-list-item" onClick={() => setOpen(!open)}
                                aria-controls="example-collapse-text"
                                aria-expanded={open}>
                                    <FontAwesomeIcon icon={faChartBar} />
                                &nbsp;
                                Sales Reports
                            </ListGroup.Item>
                            <Collapse in={open}>
                                   <div className="example-collapse-text">
                                       <div className="pos-nav-a">
                                            <a href="/reports"> Daily Sales Report</a>
                                        </div>
                                        <div className="pos-nav-a">
                                        <a href="/reports_monthly">Monthly Sales Report</a>  
                                        </div>  
                                    </div> 
                                </Collapse>
                                <ListGroup.Item action onClick={alertClicked} className="pos-list-item">
                                    <FontAwesomeIcon icon={faChartBar} />
                                &nbsp;
                                GST Reports
                            </ListGroup.Item>
                                <ListGroup.Item action onClick={alertClicked} className="pos-list-item">
                                    <FontAwesomeIcon icon={faUsers} />
                                &nbsp;
                                Staff Performance Reports
                            </ListGroup.Item>
                                <ListGroup.Item action onClick={alertClicked} className="pos-list-item">
                                    <FontAwesomeIcon icon={faUsers} />
                                &nbsp;
                                Cash Management Reports
                            </ListGroup.Item>
                                <ListGroup.Item action onClick={alertClicked} className="pos-list-item">
                                    <FontAwesomeIcon icon={faUsers} />
                                &nbsp;
                                Banquet Reports
                            </ListGroup.Item>
                                <ListGroup.Item action onClick={alertClicked} className="pos-list-item">
                                    <FontAwesomeIcon icon={faChartLine} />
                                &nbsp;
                                Master Dashboard
                            </ListGroup.Item>
                            </ListGroup>
                        </div>
                    </Col>
                    <Col xs={12} lg={10}>
                        <Container className="pos-report-container">
                            <h4>Monthly Sales Report</h4>
                            <hr />
                            <Card className="well">
                                <Card.Body>
                                    <Form onSubmit={handleSubmit}>
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
                                                        dateFormat="MM/yyyy"
                                                        showMonthYearPicker
                                                        showFullMonthYearPicker
                                                        showTwoColumnMonthYearPicker
                                                        className="pos-date-picker"
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
                                                <Button type="submit">Download</Button>
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

export default ReportsMonthly;
