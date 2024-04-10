import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navigation-menu primary--menu">

                    <ul>
                        <li className="">
                            <Link to="/"><span>Home</span></Link>
                        </li>
                        <li className="has-children has-children--multilevel-submenu">
                            <Link to="/aboutus"><span>About Us</span></Link>
                            <ul className="submenu">
                                <li><Link to="/leadership"><span>Leadership</span></Link></li> 
                                <li><Link to="/whychooseus"><span>Why choose us</span></Link></li>
                                <li><Link to="/testimonials"><span>Testimonials</span></Link></li>
                            </ul>
                        </li>
                        <li className="has-children has-children--multilevel-submenu">
                            <Link to="/services"><span>Services</span></Link>
                            <ul className="submenu">
                                <li><Link to="/services"><span>IT Services</span></Link></li>
                                <li><Link to="/servicedetails"><span>IT Services Details</span></Link></li>
                            </ul>
                        </li>
                        <li className="">
                            <Link to="/careers"><span>Careers</span></Link>  
                        </li>
                        
                        <li className="">
                            <Link to="/contactus"><span>Contact Us</span></Link>  
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}