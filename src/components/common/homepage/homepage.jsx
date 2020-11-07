import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Link from 'react-router-dom/Link'
import './homepage.css'
import Header from '../header'
import Footer from '../footer'
import flag from '../img/American-Flag.mp4'
import oj from '../img/pose.jpeg'


function Homepage(){
    return (
        <div>
            <Header />
                <div className = 'vid-container'>
                    <video autoPlay loop muted className = 'flag'>
                        <source src = {flag} type = 'video/mp4' />
                    </video>

                    <div className = 'flag-text'>
                        <h2 className>Committed to helping our veterans</h2>
                        <h1>VETERAN AWARENESS PROJECT</h1>
                        <hr style = {{width : '50%' , position : 'relative', zIndex : '2'}} />
                        <a href = 'https://www.paypal.me/selfcarefun' target = '_blank'>
                        <button className='btn btn-primary btn-lg active donate-box' role = 'button' aria-pressed='true'>
                            MAKE A CONTRIBUTION
                        </button>
                        </a>
                    </div>
                </div>
            <Container>
                <Row className = 'justify-content-md-center'>
                    <Col xs={{span: 12, order: 1}} md = {{span : 6, order : 2}} >
                        <Image
                        src = {oj}
                        className = 'container-div'
                        fluid
                        />
                        <p>CAPT Oliva Chavez, CH-47 Chinook Piolt, During Operation
                            Enduring Freedom '08 -'09
                        </p>
                    </Col>
                    <Col xs={{span: 12, order: 1}} md = {{span : 6, order : 2}}>
                        <div className = 'container-div'>
                        <h1>You've come To The Right Place</h1>
                        <p>Welcome to The Veterans Awareness Project. From my own experience as a veteran, 
                            I know how difficult it can be to return to regular society. Veterans of the United 
                            States deal with disconnection with family and friends every day. After encountering 
                            problems myself, I did a deep dive into the benefits that are available for veterans. 
                            After extensive research, I began to offer my services to veterans in 2012. Now I have 
                            extensive knowledge about educational, financial, medical, state, and federal benefits 
                            for veterans of the United States. To protect and acknowledge our veterans there are 
                            many benefits available. Unfortunately, to receive the rights you deserve, you have to 
                            go through a difficult and costly process. Due to my personal experience, I know exactly 
                            how to help others to receive their rightful benefits. To increase awareness of the 
                            situation of veterans I organize seminars, programs, and conferences as well. These 
                            activities are devised for friends and family members. They will be briefed on the challenges 
                            of a veteran to return to society. I will also explain their role in the process and what 
                            their role is to increase the success of the reintegration of their loved ones.</p>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row xs>
                    <a href = 'https://www.army.mil' target = '_blank'>
                    <Image
                    src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Mark_of_the_United_States_Army.svg/1200px-Mark_of_the_United_States_Army.svg.png'
                    className = 'army-img'
                    />
                    </a>
                    <a href = 'https://www.navy.mil' target = '_blank'>
                    <Image
                    src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Emblem_of_the_United_States_Navy.svg/1200px-Emblem_of_the_United_States_Navy.svg.png'
                    className = 'army-img'
                    />
                    </a>
                    <a href = 'https://www.airforce.com' target = '_blank'>
                    <Image
                    src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Mark_of_the_United_States_Air_Force.svg/1200px-Mark_of_the_United_States_Air_Force.svg.png'
                    className = 'army-img'
                    />
                    </a>
                    <a href = 'https://www.marines.mil/' target = '_blank'>
                    <Image
                    src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Emblem_of_the_United_States_Marine_Corps.svg/1200px-Emblem_of_the_United_States_Marine_Corps.svg.png'
                    className = 'army-img'
                    />
                    </a>
                    <a href = 'https://www.uscg.mil/' target = '_blank'>
                    <Image
                    src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Seal_of_the_United_States_Coast_Guard.svg/1200px-Seal_of_the_United_States_Coast_Guard.svg.png'
                    className = 'army-img'
                    />
                    </a>
                    <a href = 'https://www.nationalguard.com/' target = '_blank'>
                    <Image
                    src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Seal_of_the_United_States_National_Guard.svg/1200px-Seal_of_the_United_States_National_Guard.svg.png'
                    className = 'army-img'
                    />
                    </a>
                    <a href = 'https://www.goang.com/' target = '_blank'>
                    <Image
                    src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/US-AirNationalGuard-2007Emblem.svg/1200px-US-AirNationalGuard-2007Emblem.svg.png'
                    className = 'army-img'
                    />
                    </a>
                </Row>
            </Container>

            <Container>
                <h1 style = {{textAlign : 'center', marginTop : '15px', marginBottom : '30px', fontSize : '50px'}} >What We Do</h1>
                <Row style = {{marginTop : '30px', marginBottom : '30px'}}>
                    <Col xs>
                        <Card style = {{width : '18rem'}}>
                            <Card.Body>
                                <Card.Title>Veteran Advocacy</Card.Title>
                                <Card.Text>
                                We advocate for Veteran Rights & Benefits which include working 
                                with elected officials on legislation concerning Jobs, Employment 
                                Assistance & Women focused resources.
                                </Card.Text>
                                <Link to = '/what_we_do' target = '_blank'>
                                    <Button variant='primary'>Learn More</Button>
                                </Link>
                                
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                    <Card style = {{width : '18rem'}}>
                            <Card.Body>
                                <Card.Title>Sate and Federal Benefits</Card.Title>
                                <Card.Text>
                                We connect Veterans with their Local Benefits & Organizations. 
                                We offer seminars for companies and organizations to better understand 
                                Veteran Benefits as well as the need for on site Services.
                                </Card.Text>
                                <Link to = '/what_we_do' target = '_blank'>
                                    <Button variant='primary'>Learn More</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                    <Card style = {{width : '18rem'}}>
                            <Card.Body>
                                <Card.Title>Educational Benefits</Card.Title>
                                <Card.Text>
                                We connect Veterans & their families with Educational 
                                Resources; to include seeking additional funding based on 
                                location and service.
                                </Card.Text>
                                <Link to = '/what_we_do' target = '_blank'>
                                    <Button variant='primary'>Learn More</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    
                    <Col>
                    <Card style = {{width : '18rem'}}>
                            <Card.Body>
                                <Card.Title>Guiding Veterans through the claims process</Card.Title>
                                <Card.Text>
                                We take pride in working one on one with Veterans and their families 
                                as they navigate the VA Medical Claims process. We work directly 
                                with Veterans and families on guiding and gathering the data needed 
                                to create a fully developed claim.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                    <Card style = {{width : '18rem'}}>
                            <Card.Body>
                                <Card.Title>Military & Suicide Awareness</Card.Title>
                                <Card.Text>
                                It is our goal to be present for our Veterans and their 
                                families. Suicide continues to claim the lives of 22 Veterans 
                                & Active Duty members each day. HOWEVER, our families are also 
                                suffering and are in need of resources as well. We work collectively 
                                with our partners to offer resources in order to locate the assistance needed.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                    <Card style = {{width : '18rem'}}>
                            <Card.Body>
                                <Card.Title>Women Veterans</Card.Title>
                                <Card.Text>
                                Women make up 10% of the Veteran Population today (for the most recent 
                                projections, visit VetPOP 2011). In FY 2009, the average age of women 
                                Veterans was 48 years, compared to 63 years for their male counterparts. 
                                It is imperative to discuss and offer support to the unique needs of women 
                                Veterans as well as the fastest growing segment of the homeless Veteran 
                                population, showing us that there is a gap in services for women.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        <Footer />
        </div>
    )
}

export default Homepage