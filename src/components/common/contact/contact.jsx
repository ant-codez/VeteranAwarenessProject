import React, { Component } from 'react';
import Header from '../header'
import Footer from '../footer'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import sparks from '../img/sparks.jpg'
import { Map, GoogleApiWrapper } from 'google-maps-react';
import MapContainer from '../mapContainer'
import './contact.css'

function Contact() {
    return (
        <div>
            <Header />

            <div style = {{position : 'relative', textAlign : 'center', color : 'white' }}>
                <img src = {sparks} style = {{height : '200px', width : '100%', objectFit : 'cover'}} />
                <h1 style = {{position : 'absolute', top : '50%', left : '50%', transform : 'translate(-50%, -50%)'}}>Contact Us</h1>
            </div>

            <Container style = {{marginTop : '50px' , marginBottom : '50px'}}>
                <Row>
                    <Col>
                        <h1>Contact Details</h1>
                        <ul className='list-unstyled'>
                            <li>Phone : 866-980-2795</li>
                            <li>Fax : 818-337-7510</li>
                            <li>Email : Admin@VetAwareness.com</li>
                            <li>Mailing Address : 4710 Sangamore Rd. #100N, Bethesda, MD 20816</li>
                        </ul>

                        <MapContainer />

                        <h1 style = {{marginTop : '25px'}}>Connect with Us Today</h1>
                        <a target = '_blank' href = 'https://www.facebook.com/VeteranAwareness'><i id = 'icon' className="fa fa-facebook-square"></i></a>
                        <a target = '_blank' href = 'https://www.twitter.com/VetAwareness'><i i id = 'icon'  className="fa fa-twitter"></i></a>
                        <a target = '_blank' href = 'https://www.linkedin.com/company/veteran-awareness-project'><i i id = 'icon'  className="fa fa-linkedin"></i></a>
                        <a target = '_blank' href = 'https://www.instagram.com/veteranawarenessproject'><i i id = 'icon'  className="fa fa-instagram"></i></a>
                        <a target = '_blank' href = 'https://ar.pinterest.com/vetawareness/_created/'><i i id = 'icon'  className="fa fa-pinterest"></i></a>
                    </Col>
                    <Col>
                        <h1>Send Us A Message</h1>
                        <Form>
                            <Form.Group controlId = 'Name'>
                                <Form.Label>Name</Form.Label>
                                <Form.Control type = "name" placeholder='Name' />
                            </Form.Group>
                            <Form.Group controlId = 'email'>
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type = "email" placeholder='email address' />
                            </Form.Group>
                            <Form.Group controlId = 'message'>
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder = 'Message' />
                            </Form.Group>
                            <Button variant = 'primary' type = 'sumbit'>Sumbit</Button>
                    </Form>
                    </Col>
                </Row>
            
                <h1 style = {{textAlign : 'center' , marginTop : '40px'}}>Resource Links</h1>

                <Row>
                    <ul className = 'list-unstyled'>
                        <li>
                        <a target = "_blank" href  = 'https://cardenas.house.gov/constituent-services-resources/military-personnel-veterans/congressional-veterans-advisory-committee '><h2>Veteran Advisory Committee</h2></a>
                        </li>
                        <li>
                        <a target = '_blank' href = 'https://www.calvet.ca.gov/WomenVets/Pages/California-Women-Veterans-Leadership-Council.aspx'><h2>CAL Womens Vets Leadership Council</h2></a>
                        </li>
                    </ul>
                </Row>
            </Container>
            

            <Footer />
        </div>
    )
}



export default Contact