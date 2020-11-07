import React from 'react'
import Header from '../header'
import Footer from '../footer'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Carousel from 'react-bootstrap/Carousel'
import './about.css'
import flag from '../img/flag.jpeg'
import VHTV from '../img/VHVTV.jpg'
import one from '../img/1.jpg'
import two from '../img/2.png'
import three from '../img/3.jpg'
import four from '../img/4.jpg'
import shake from '../img/shake.jpg'
import oj from '../img/Oj.jpeg'
import logo from '../img/logo.jpg'
import t from '../img/traci.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function About(){
    return (
        <div>
            <Header />

                <div style = {{position : 'relative', textAlign : 'center', color : 'white'}}>
                    <img src = {flag} style = {{maxHeight : '33vh', width : '100%'}} />
                    <h1 style = {{position : 'absolute', top : '50%', left : '50%', transform : 'translate(-50%, -50%)'}}>ABOUT US</h1>
                </div>


            <Container>
                <Row className = 'justify-content-md-center'>
                <Col xs={{span: 12, order: 1}} md = {{span : 6, order : 2}} >
                        <div className = 'container-div'>
                        <h1>About Veteran Awareness Project</h1>
                        <p>For 22 years I have served my country as a combat pilot 
                            for the US Army and Marine Corps. During my time in the army, 
                            I flew a Chinook helicopter in Afghanistan for the 101st Airborne 
                            Division out of SC. In these 22 years, it was hard to stay in contact 
                            with my family. They were not allowed to receive any information about 
                            my activities and missions. From the moment I was deployed until after 
                            I became a veteran, I experienced how disconnected I became with my 
                            family and friends. The war had changed my perspective on family and 
                            friendship. Furthermore, my point of view on regular society was totally 
                            different than theirs, resulting in many arguments over the years. Every 
                            day, 22 veterans commit suicide because they cannot connect with regular 
                            society anymore. I am raising veteran suicide awareness through seminars, 
                            conferences, and programs for family and friends of veterans. Family and 
                            friends are the most important people to help veterans through difficult 
                            times. If they understand the stress veterans experience from war incidents 
                            and adjusting to society, they can offer more support. To help veterans 
                            receive the benefits they deserve to make life a bit easier, I offer my 
                            services. I have extensive knowledge of veteran advocacy and do veteran 
                            claims processing. Let me help you build up the life you deserve after 
                            serving your country.</p>
                        </div>
                    </Col>

                    <Col xs={{span: 12, order: 2}} md = {{span : 6, order : 2}} >
                        <Image
                        src = {VHTV}
                        className = 'center-img'
                        fluid
                        />
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
    
            <div style = {{position : 'relative', textAlign : 'center', color : 'white'}}>
                <img src = {flag} style = {{height : '378px', width : '100%'}} />
                <h1 style = {{position : 'absolute', top : '50%', left : '50%', transform : 'translate(-50%, -50%)'}}>News & Events
                <Button style = {{marginLeft : '100px'}} variant='primary' size='lg' href = 'https://vhvtv.org/combat-aviator-sisters-in-arms-a-chat-with-latina-military-veterans-olivia-graciela/' target = '_blank'>
                    Click Here For News And Events
                </Button>
                </h1>
            </div>

            <Container>
                <Row className = 'justify-content-md-center'>
                <Col xs={{span: 12, order: 1}} md = {{span : 6, order : 1}} >
                        <div className = 'container-div'>
                        <h1>Our Story</h1>
                        <p>We work directly with Veterans, Service Members and their Families … 
                            Adjusting to life during or after your time in the service sometimes 
                            has bumps that need to be smoothed out… Let us assess your situation and 
                            get to some real answers !!
                            
                            Created by Olivia Chavez Carroll from the San Fernando Valley, CA 
                            seeking to work with Veterans and their loved ones through Self Care 
                            and Wellness Practices. We must remember to Love each other, Smile when 
                            you pass a stranger. “Share Please” and “Thank You’s” SEMPER FI ~</p>
                        </div>
                    </Col>

                    <Col xs={{span: 12, order: 2}} md = {{span : 6, order : 2}} >
                        <Carousel style = {{marginTop : '50px' , marginBottom : '50px'}}>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src= {one}
                                alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={two}
                                alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={three}
                                alt="Third slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={four}
                                alt="Forth slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    
                </Row>
            </Container>

            <Container style = {{marginTop : '25px'}}>

                <Row >
                    <Col xs={{span: 12, order: 1}} md = {{span : 6, order : 2}} >
                        <Image src ={shake} fluid></Image>
                    </Col>
                    <Col xs={{span: 12, order: 2}} md = {{span : 6, order : 2}} >
                        <h1>Awards</h1>
                        <ul>
                            <li>CEO Veteran of the Year 2013 - California Assembly District 39</li>
                            <li>2014 Veteran of the Year - City of Los Angeles CD 6</li>
                            <li>2014 SHERO AWARD from the National Assoc. of Black Militart Women, Los Angles Chapter</li>
                        </ul>
                    </Col>
                </Row>

                <Row style = {{marginTop : '90px'}}>
                    <Col className = 'center'>
                    <h1 style = {{fontSize : '65px', fontWeight : '900'}}>Board of Directors</h1>
                        <Image 
                        src = {oj} 
                        style = {{width : '159px' , height : '212px'}}
                        />
                        <h3 style = {{fontSize : '35px', fontWeight : '900'}}>Olivia Chavez</h3>
                        <h2 style = {{fontSize : '15px', fontWeight : '300', letterSpacing : '5px', color : '#bfbfbf'}}>CARROLL PRESIDENT</h2>
                        <p>Member of the Following Organizations.</p>
                        <p>-Veteran Advisory Committee for US Congressional District 29, 
                            Congressman Tony Cardenas (San Fernando) </p>
                        <p>California Womens Veterans Leadership Council <a href = 'https://www.calvet.ca.gov/WomenVets/Pages/California-Women-Veterans-Leadership-Council.aspx' target = '_blank'>CALVET - CWVLC</a></p>
                        <a href = 'https://www.calvet.ca.gov/calvet-programs/women-veterans' target = '_blank'><p>CalVet Women Veterans Page</p></a> 
                    </Col>
                    <Col className = 'center'>
                        <Image 
                        src = {logo}
                        style = {{width : '160px' , height : '160px'}}
                        />
                        <h1 style = {{fontSize : '35px' , fontWeight : '900'}}>Ann Dusan</h1>
                        <h3 style = {{fontSize : '15px', fontWeight : '300', letterSpacing : '5px', color : '#bfbfbf'}}>SECRETARY</h3>
                        <h3 style = {{fontSize : '15px', fontWeight : '300', letterSpacing : '5px', color : '#bfbfbf'}}>READER</h3>

                        <Image 
                        src = {logo}
                        style = {{width : '160px' , height : '160px'}}
                        />
                        <h1 style = {{fontSize : '35px', fontWeight : '900'}}>Jacob Carroll, Sr.</h1>
                        <h3 style = {{fontSize : '15px', fontWeight : '300', letterSpacing : '5px', color : '#bfbfbf'}}>TREASURER</h3>
                    </Col>
                </Row>
                
                <h1 style = {{marginTop : '45px' , fontSize : '65px', fontWeight : '900'}}>Advisory Board</h1>

                <Row style = {{marginTop : '45px' , marginBottom : '50px'}}>
                    
                    <Col>
                        <p>US ARMY VETERAN</p>
                        <h1>Traci Nettles</h1>
                        <Image
                        src = {t}
                        style = {{width : '150px', height : '150px'}}
                        />
                    </Col>
                    <Col>
                        <p>FAMILY MEMEBER OF US VETERAN</p>
                        <h1>Delia Gonzalez</h1>
                    </Col>
                    <Col>
                        <p>SISTER TO US VETERAN</p>
                        <h1>Martha I Zarate</h1>
                    </Col>
                </Row>

            </Container>

            <Footer />
        </div>
    )
}

export default About;