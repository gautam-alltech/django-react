import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Navbar from './Navbar';

export default class Header extends Component {
    render() {
        return (
            <div>
                <div className="preloader-activate preloader-active open_tm_preloader">
                    <div className="preloader-area-wrap">
                        <div className="spinner d-flex justify-content-center align-items-center h-100">
                            <div className="bounce1"></div>
                            <div className="bounce2"></div>
                            <div className="bounce3"></div>
                        </div>
                    </div>
                </div>

                {/* <!--====================  header area ====================--> */}
                <div className="header-area header-area--default">

                    {/* <!-- Header Top Wrap Start --> */}
                    <div className="header-top-wrap border-bottom">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-12">
                                    <p className="text-center top-message">
                                    <a href="#">Now Hiring:</a> Are you a driven and motivated 1st Line IT Support Engineer?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Header Top Wrap End --> */}

                    {/* <!-- Header Bottom Wrap Start --> */}
                    <div className="header-bottom-wrap header-sticky">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="header default-menu-style position-relative">

                                        {/* <!-- brand logo --> */}
                                        <div className="header__logo">
                                            <a href="index.html">
                                                <img src="assets/images/logo/logo-dark.webp" width="160" height="48" className="img-fluid" alt=""/>
                                            </a>
                                        </div>

                                        {/* <!-- header midle box  --> */}
                                        <div className="header-midle-box">
                                            <div className="header-bottom-wrap d-md-block d-none">
                                                <div className="header-bottom-inner">
                                                    <div className="header-bottom-left-wrap">
                                                        {/* <!-- navigation menu --> */}
                                                        <div className="header__navigation d-none d-xl-block">
                                                            {/* {% include "my/nav.html" %} */}
                                                            <Navbar/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Header Bottom Wrap End --> */}

                </div>
                {/* <!--====================  End of header area  ====================--> */}
            </div>
        )
    }
}