import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./footer.css";
import logo from '../img/logo.png'
import Image from 'react-bootstrap/Image'
import Link from 'react-router-dom/Link'

function Footer(){
    return (
        <div className = 'main-footer'>
            <div className='container'>
                <div className='row'>
                    {/* Col 1 */}
                    <div className='col'>
                        <a href = '/'>
                        <Image 
                        src = {logo}
                        style = {{width : '200px', height : '200px'}}
                        />
                        </a>
                    </div>
                    {/* Col 2 */}
                    {/*
                    <div className='col'>
                        <h4>About Us</h4>
                        
                        <p>We work directly with Veterans, Service Members and their Families … Adjusting
                             to life during or after your time in the service sometimes has bumps that need to be 
                             smoothed out… Let us assess your situation and get to some real answers !!</p>
                        
                    </div>
                    */}
                    {/* Col 3 */}
                    <div className='col'>
                        <h4>Stay Connected</h4>
                        <a target = '_blank' href = 'https://www.facebook.com/VeteranAwareness'><i className="fa fa-facebook-square"></i></a>
                        <a target = '_blank' href = 'https://www.twitter.com/VetAwareness'><i className="fa fa-twitter"></i></a>
                        <a target = '_blank' href = 'https://www.linkedin.com/company/veteran-awareness-project'><i className="fa fa-linkedin"></i></a>
                        <a target = '_blank' href = 'https://www.instagram.com/veteranawarenessproject'><i className="fa fa-instagram"></i></a>
                        <a target = '_blank' href = 'https://ar.pinterest.com/vetawareness/_created/'><i className="fa fa-pinterest"></i></a>
                    </div>
                    {/* Col 4 */}
                    <div className='col'>
                        <h4>Contact Details</h4>
                        <ul className='list-unstyled'>
                            <li>Phone : 866-980-2795</li>
                            <li>Fax : 818-337-7510</li>
                            <li>Email : Admin@VetAwareness.com</li>
                            <li>Mailing Address : 4710 Sangamore Rd. #100N, Bethesda, MD 20816</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className='row'>
                    <p className='col-sm'>
                        &copy;{new Date().getFullYear()} Veterans Awareness Project | All Rights Reserved | Terms Of Service | Privacy
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer;