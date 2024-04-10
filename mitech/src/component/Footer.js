import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Footer extends Component {
    render() {
        return (<>
            <div>
                <div className="footer-area-wrapper bg-gray">
                    <div className="footer-area section-space--ptb_80">
                        <div className="container">
                            <div className="row footer-widget-wrapper">
                                <div className="col-lg-4 col-md-6 col-sm-6 footer-widget">
                                    <div className="footer-widget__logo mb-30">
                                        <img src="assets/images/logo/dark-logo-160x48.webp" width="160" height="48" className="img-fluid" alt=""/>
                                    </div>
                                    <ul className="footer-widget__list">
                                        <li>58 Howard Street #2 San Francisco, CA 941</li>
                                        <li><a href="mailto:contact@aeroland.com" className="hover-style-link">contact@aeroland.com</a></li>
                                        <li><a href="tel:123344556" className="hover-style-link text-black font-weight--bold">(+68)1221 09876</a></li>
                                        <li><a href="https://hasthemes.com/" className="hover-style-link text-color-primary">www.mitech.xperts.com</a></li>
                                    </ul>
                                </div>
                                <div className="col-lg-2 col-md-4 col-sm-6 footer-widget">
                                    <h6 className="footer-widget__title mb-20">Services</h6>
                                    <ul className="footer-widget__list">
                                        <li><a href="/" className="hover-style-link">IT Services</a></li>
                                        <li><a href="/" className="hover-style-link">IT Services Details</a></li>
                                    </ul>
                                </div>
                                <div className="col-lg-2 col-md-4 col-sm-6 footer-widget">
                                    <h6 className="footer-widget__title mb-20">About Us</h6>
                                    <ul className="footer-widget__list">
                                        <li><a href="/" className="hover-style-link">Leadership</a></li>
                                        <li><a href="/" className="hover-style-link">Why Choose Us</a></li>
                                        <li><a href="/" className="hover-style-link">Testimonials</a></li>
                                    </ul>
                                </div>
                                <div className="col-lg-2 col-md-4 col-sm-6 footer-widget">
                                    <h6 className="footer-widget__title mb-20">Quick Links</h6>
                                    <ul className="footer-widget__list">
                                        <li><a href="/" className="hover-style-link">Home</a></li>
                                        <li><a href="/" className="hover-style-link">About Us</a></li>
                                        <li><a href="/" className="hover-style-link">Services</a></li>
                                        <li><a href="/" className="hover-style-link">Careers</a></li>
                                        <li><a href="/" className="hover-style-link">Contact Us</a></li>
                                    </ul>
                                </div>
                                <div className="col-lg-2 col-md-4 col-sm-6 footer-widget">
                                    <div className="footer-widget__title section-space--mb_50"></div>
                                    <ul className="footer-widget__list">
                                        <li>
                                            <a href="#" className="image_btn"><img className="img-fluid" src="assets/images/icons/aeroland-button-google-play.webp" alt=""/></a>
                                        </li>
                                        <li>
                                            <a href="#" className="image_btn"><img className="img-fluid" src="assets/images/icons/aeroland-button-app-store.webp" alt=""/></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-copyright-area section-space--pb_30">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-md-6 text-center text-md-start">
                                    <span className="copyright-text">&copy; 2021 Mitech. <a href="https://hasthemes.com/">All Rights Reserved.</a></span>
                                </div>
                                <div className="col-md-6 text-center text-md-end">
                                    <ul className="list ht-social-networks solid-rounded-icon">

                                        <li className="item">
                                            <a href="https://twitter.com" target="_blank" aria-label="Twitter" className="social-link hint--bounce hint--top hint--primary">
                                                <i className="fab fa-twitter link-icon"></i>
                                            </a>
                                        </li>
                                        <li className="item">
                                            <a href="https://facebook.com" target="_blank" aria-label="Facebook" className="social-link hint--bounce hint--top hint--primary">
                                                <i className="fab fa-facebook-f link-icon"></i>
                                            </a>
                                        </li>
                                        <li className="item">
                                            <a href="https://instagram.com" target="_blank" aria-label="Instagram" className="social-link hint--bounce hint--top hint--primary">
                                                <i className="fab fa-instagram link-icon"></i>
                                            </a>
                                        </li>
                                        <li className="item">
                                            <a href="https://linkedin.com" target="_blank" aria-label="Linkedin" className="social-link hint--bounce hint--top hint--primary">
                                                <i className="fab fa-linkedin link-icon"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* <!--====================  scroll top ====================--> */}
                <a href="#" className="scroll-top" id="scroll-top">
                    <i className="arrow-top fal fa-long-arrow-up"></i>
                    <i className="arrow-bottom fal fa-long-arrow-up"></i>
                </a>
                {/* <!--====================  End of scroll top  ====================--> */}

                {/* <!--====================  mobile menu overlay ====================--> */}
                <div className="mobile-menu-overlay" id="mobile-menu-overlay">
                    <div className="mobile-menu-overlay__inner">
                        <div className="mobile-menu-overlay__header">
                            <div className="container-fluid">
                                <div className="row align-items-center">
                                    <div className="col-md-6 col-8">
                                        {/* <!-- logo --> */}
                                        <div className="logo">
                                            <a href="index.html">
                                                <img src="assets/images/logo/logo-dark.webp" className="img-fluid" alt=""/>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-4">
                                        {/* <!-- mobile menu content --> */}
                                        <div className="mobile-menu-content text-end">
                                            <span className="mobile-navigation-close-icon" id="mobile-menu-close-trigger"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mobile-menu-overlay__body">
                            <nav className="offcanvas-navigation">
                                <ul>
                                    <li className="has-children">
                                        <a href="index.html">Home</a>
                                        <ul className="sub-menu">
                                            <li><a href="index-infotechno.html"><span>Infotechno</span></a></li>
                                            <li><a href="index-processing.html"><span>Processing</span></a></li>
                                            <li><a href="index-appointment.html"><span>Appointment</span></a></li>
                                            <li><a href="index-services.html"><span>Services</span></a></li>
                                            <li><a href="index-resolutions.html"><span>Resolutions</span></a></li>
                                            <li><a href="index-cybersecurity.html"><span>cybersecurity</span></a></li>
                                            <li><a href="index-modern-it-company.html"><span>Modern IT Company</span></a></li>
                                            <li><a href="index-machine-learning.html"><span>Machine Learning</span></a></li>
                                            <li><a href="index-software-innovation.html"><span>Software Innovation</span></a></li>
                                        </ul>
                                    </li>
                                    <li className="has-children">
                                        <a href="#">Company</a>
                                        <ul className="sub-menu">
                                            <li className="has-children">
                                                <a href="about-us-01.html"><span>About us</span></a>
                                                <ul className="sub-menu">
                                                    <li><a href="about-us-01.html"><span>About us 01</span></a></li>
                                                    <li><a href="about-us-02.html"><span>About us 02</span></a></li>
                                                    <li className="has-children">
                                                        <a href="#"><span>Submenu Level Two</span></a>
                                                        <ul className="sub-menu">
                                                            <li><a href="#"><span>Submenu Level Three</span></a></li>
                                                            <li><a href="#"><span>Submenu Level Three</span></a></li>
                                                            <li><a href="#"><span>Submenu Level Three</span></a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li><a href="contact-us.html"><span>Contact us</span></a></li>
                                            <li><a href="leadership.html"><span>Leadership</span></a></li>
                                            <li><a href="why-choose-us.html"><span>Why choose us</span></a></li>
                                            <li><a href="our-history.html"><span>Our history</span></a></li>
                                            <li><a href="faqs.html"><span>FAQs</span></a></li>
                                            <li><a href="careers.html"><span>Careers</span></a></li>
                                            <li><a href="pricing-plans.html"><span>Pricing plans</span></a></li>
                                        </ul>
                                    </li>
                                    <li className="has-children">
                                        <a href="#">IT solutions</a>
                                        <ul className="sub-menu">
                                            <li><a href="it-services.html"><span>IT Services</span></a></li>
                                            <li><a href="managed-it-service.html"><span>Managed IT Services</span></a></li>
                                            <li><a href="industries.html"><span>Industries</span></a></li>
                                            <li><a href="business-solution.html"><span>Business solution</span></a></li>
                                            <li><a href="it-services-details.html"><span>IT Services Details</span></a></li>
                                        </ul>
                                    </li>
                                    <li className="has-children">
                                        <a href="#">Elements</a>
                                        <ul className="sub-menu">
                                            <li className="has-children">
                                                <a href="#">Element Group 01</a>
                                                <ul className="sub-menu">
                                                    <li><a href="element-accordion.html"><span>Accordions & Toggles</span></a></li>
                                                    <li><a href="element-box-icon.html"><span>Box Icon</span></a></li>
                                                    <li><a href="element-box-image.html"><span>Box Image</span></a></li>
                                                    <li><a href="element-box-large-image.html"><span>Box Large Image</span></a></li>
                                                    <li><a href="element-buttons.html"><span>Buttons</span></a></li>
                                                    <li><a href="element-cta.html"><span>Call to action</span></a></li>
                                                    <li><a href="element-client-logo.html"><span>Client Logo</span></a></li>
                                                    <li><a href="element-countdown.html"><span>Countdown</span></a></li>
                                                </ul>
                                            </li>
                                            <li className="has-children">
                                                <a href="#">Element Group 02</a>
                                                <ul className="sub-menu">
                                                    <li><a href="element-counters.html"><span>Counters</span></a></li>
                                                    <li><a href="element-dividers.html"><span>Dividers</span></a></li>
                                                    <li><a href="element-flexible-image-slider.html"><span>Flexible image slider</span></a></li>
                                                    <li><a href="element-google-map.html"><span>Google Map</span></a></li>
                                                    <li><a href="element-gradation.html"><span>Gradation</span></a></li>
                                                    <li><a href="element-instagram.html"><span>Instagram</span></a></li>
                                                    <li><a href="element-lists.html"><span>Lists</span></a></li>
                                                    <li><a href="element-message-box.html"><span>Message box</span></a></li>
                                                </ul>
                                            </li>
                                            <li className="has-children">
                                                <a href="#">Element Group 03</a>
                                                <ul className="sub-menu">
                                                    <li><a href="element-popup-video.html"><span>Popup Video</span></a></li>
                                                    <li><a href="element-pricing-box.html"><span>Pricing Box</span></a></li>
                                                    <li><a href="element-progress-bar.html"><span>Progress Bar</span></a></li>
                                                    <li><a href="element-progress-circle.html"><span>Progress Circle</span></a></li>
                                                    <li><a href="element-rows-columns.html"><span>Rows & Columns</span></a></li>
                                                    <li><a href="element-social-networks.html"><span>Social Networks</span></a></li>
                                                    <li><a href="element-tabs.html"><span>Tabs</span></a></li>
                                                    <li><a href="element-team-member.html"><span>Team member</span></a></li>
                                                </ul>
                                            </li>
                                            <li className="has-children">
                                                <a href="#">Element Group 04</a>
                                                <ul className="sub-menu">
                                                    <li><a href="element-testimonials.html"><span>Testimonials</span></a></li>
                                                    <li><a href="element-timeline.html"><span>Timeline</span></a></li>
                                                    <li><a href="element-carousel-sliders.html"><span>Carousel Sliders</span></a></li>
                                                    <li><a href="element-typed-text.html"><span>Typed Text</span></a></li>
                                                </ul>
                                            </li>

                                        </ul>
                                    </li>
                                    <li className="has-children">
                                        <a href="javascript:void(0)">Case Studies</a>
                                        <ul className="sub-menu">
                                            <li><a href="case-studies.html"><span>Case Studies 01</span></a></li>
                                            <li><a href="case-studies-02.html"><span>Case Studies 02</span></a></li>
                                            <li><a href="single-smart-vision.html"><span>Single Layout</span></a></li>
                                        </ul>
                                    </li>
                                    <li className="has-children">
                                        <a href="javascript:void(0)">Blogs</a>
                                        <ul className="sub-menu">
                                            <li><a href="blog-list-large-image.html"><span>List Large Image</span></a></li>
                                            <li><a href="blog-list-left-large-image.html"><span>Left Large Image</span></a></li>
                                            <li><a href="blog-grid-classic.html"><span>Grid Classic</span></a></li>
                                            <li><a href="blog-grid-masonry.html"><span>Grid Masonry</span></a></li>
                                            <li className="has-children">
                                                <a href="blog-post-layout-one.html"><span>Single Layouts</span></a>
                                                <ul className="sub-menu">
                                                    <li><a href="blog-post-layout-one.html"><span>Left Sidebar</span></a></li>
                                                    <li><a href="blog-post-right-sidebar.html"><span>Right Sidebar</span></a></li>
                                                    <li><a href="blog-post-no-sidebar.html"><span>No Sidebar</span></a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                {/* <!--====================  End of mobile menu overlay  ====================--> */}


                {/* <!--====================  search overlay ====================--> */}
                <div className="search-overlay" id="search-overlay">

                    <div className="search-overlay__header">
                        <div className="container-fluid">
                            <div className="row align-items-center">
                                <div className="col-md-6 ms-auto col-4">
                                    {/* <!-- search content --> */}
                                    <div className="search-content text-end">
                                        <span className="mobile-navigation-close-icon" id="search-close-trigger"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="search-overlay__inner">
                        <div className="search-overlay__body">
                            <div className="search-overlay__form">
                                <form action="#">
                                    <input type="text" placeholder="Search"/>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--====================  End of search overlay  ====================--> */}
            </div></>
        )
    }
}