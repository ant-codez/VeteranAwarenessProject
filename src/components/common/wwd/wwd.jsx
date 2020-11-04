import React from 'react'
import Header from '../header'
import Footer from '../footer'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import sparks from '../img/sparks.jpg'
import group from '../img/group.jpg'
import flag from '../img/OJ_flag.jpg'
import woman from '../img/woman.png'
import './wwd.css'

function WWD() {
    return (

        <div>
            <Header />

            <div style = {{position : 'relative', textAlign : 'center', color : 'white' }}>
                <img src = {sparks} style = {{height : '200px', width : '100%', objectFit : 'cover'}} />
                <h1 style = {{position : 'absolute', top : '50%', left : '50%', transform : 'translate(-50%, -50%)'}}>What We Do</h1>
            </div>

            <Container style = {{marginTop : '55px', marginBottom : '55px'}}>
                <Row>
                    <Col style = {{textAlign : 'left' , marginRight : '30px'}}>
                    The mission of The Veteran Awareness Project is to help veterans reintegrate 
                    as a civilian with success and happiness. The people who served our country with 
                    honor have the right to live a happy life as a veteran. One of the most important 
                    ways to do this is veteran suicide awareness. A sad reality is that 22 veterans 
                    commit suicide every day. This has to stop. After extensive studies of the rights 
                    of veterans, I offer my services to veterans to help them create the happy and 
                    comfortable life they deserve.
                    </Col>
                    <div className = "vl"></div>
                    <Col>
                        
                        <p>OUR SPECIALITIES</p>
                        <ul>
                            <li><a href = '#VA'>Veteran Advocacy</a></li>
                            <li><a >Financial Benefits -Medical Benefits -Educational Benefits - Financial 
                                Benefits -Medical Benefits -State and Federal Benefits</a></li>
                            <li><a href = '#benefits'>Educational Benefits, Financial Benefits, Medical Benefits</a></li>
                        </ul>
                    </Col>
                </Row>
            </Container>

            <Container id = 'VA' style = {{marginTop : '55px', marginBottom : '55px'}}>
                <Row>
                    <Col style = {{textAlign : 'left' , marginRight : '30px'}}>
                    <h1>Veteran Advocacy</h1>
                    <p>
                    We advocate for Veteran Rights & Benefits which include working 
                    with elected officials on legislation concerning Jobs, Employment 
                    Assistance & Women focused resources.
                    </p>
                    <hr />
                    <h1>Women Veterans</h1>
                    <p>
                    Women make up 10% of the Veteran Population today (for the most recent 
                    projections, visit VetPOP 2011). In FY 2009, the average age of women 
                    Veterans was 48 years, compared to 63 years for their male counterparts. 
                    It is imperative to discuss and offer support to the unique needs of 
                    women Veterans as well as the fastest growing segment of the homeless Veteran 
                    population, showing us that there is a gap in services for women.
                    </p>
                    <hr />
                    </Col>

                    <Col>
                        <Image 
                        src ={group}
                        style ={{width : '550px', height : '366px'}} 
                        />
                    </Col>
                </Row>
            </Container>

            <Container id = 'benefits' style = {{marginTop : '55px', marginBottom : '55px'}}>
                <Row>
                    <Col style = {{textAlign : 'left' , marginRight : '30px'}}>
                    <h1>State And Federal Benefits</h1>
                    <p>
                    We connect Veterans with their Local Benefits & Organizations. 
                    We offer seminars for companies and organizations to better understand 
                    Veteran Benefits as well as the need for on site Services.
                    </p>
                    <hr />
                    <h1>Educational Benefits</h1>
                    <p>
                    We connect Veterans & their families with Educational Resources; to include 
                    seeking additional funding based on location and service.
                    </p>
                    <hr />
                    </Col>

                    <Col>
                        <Image 
                        src ={flag}
                        style ={{width : '550px', height : '366px'}} 
                        />
                    </Col>
                </Row>
            </Container>

            <Container style = {{marginTop : '55px', marginBottom : '55px'}}>
                <Row>
                <Col>
                        <Image 
                        src ={woman}
                        style ={{width : 'auto', height : '512px'}} 
                        />
                    </Col>
                    <Col style = {{textAlign : 'left' , marginRight : '30px'}}>
                    <h1>Guiding Veterans Through The Claims Process</h1>
                    <p>
                    We take pride in working one on one with Veterans and their families 
                    as they navigate the VA Medical Claims process. We work directly with 
                    Veterans and families on guiding and gathering the data needed to create 
                    a fully developed claim.
                    </p>
                    <hr />
                    <h1>Military & Veteran Suicide Awareness</h1>
                    <p>
                    It is our goal to be present for our Veterans and their families. Suicide 
                    continues to claim the lives of 22 Veterans & Active Duty members each day. 
                    HOWEVER, our families are also suffering and are in need of resources as well. 
                    We work collectively with our partners to offer resources in order to locate the 
                    assistance needed.
                    </p>
                    <hr />
                    </Col>
                </Row>
                <p className = 'pre-footer'>
                    I give and organize seminars, programs, and conferences to create awareness among 
                    friends and family of veterans, including veteran suicide awareness. If you have any 
                    questions feel free to email me at oliviac.vap@gmail.com. I am happy to help you!
                </p>
            </Container>
            

            <Footer />
        </div>
    )
}

export default WWD;