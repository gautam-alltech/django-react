import React, { Component } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sliders: [],
            contactus: []
        };
    }

    async componentDidMount() {
        try {
            const response = await axios.get("http://127.0.0.1:9000/api/slider/?page=contact");
            this.setState({ sliders: response.data });
        } catch (error) {
            console.log(error);
        }
        try {
            const response = await axios.get("http://127.0.0.1:9000/api/contactus/");
            this.setState({ contactus: response.data });
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        const { sliders, contactus } = this.state;
        return (
            <>
                <div>
                    {/* <!-- breadcrumb-area start --> */}
                    <div className="breadcrumb-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    {sliders.map((slider) => (
                                        <>
                                            <div className="breadcrumb_box text-center">
                                                <h6 className="aheto-heading__subtitle">{slider.title}</h6>
                                                <h2 className="breadcrumb-title">{slider.heading}</h2>
                                                {/* <!-- breadcrumb-list start --> */}
                                                <ul className="breadcrumb-list">
                                                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                                    <li className="breadcrumb-item active">Contact us </li>
                                                </ul>
                                            </div>
                                        </>
                                    ))}
                                    {/* <!-- breadcrumb-list end --> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- breadcrumb-area end --> */}



                    <div id="main-wrapper">
                        <div className="site-wrapper-reveal">
                            {/* <!--====================  Conact us Section Start ====================--> */}
                            <div className="contact-us-section-wrappaer section-space--pt_100 section-space--pb_70">
                                <div className="container">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6 col-lg-6">
                                            <div className="conact-us-wrap-one mb-30">
                                                <h3 className="heading">To make requests for <br />further information, <br /><span className="text-color-primary">contact us</span> via our social channels.</h3>
                                                <div className="sub-heading">We just need a couple of hours! <br /> No more than 2 working days since receiving your issue ticket.</div>
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-lg-6">
                                            <div className="contact-form-wrap">

                                                {/* <!-- <form id="contact-form" action="http://whizthemes.com/mail-php/jowel/mitech/php/mail.php" method="post"> --> */}
                                                <form id="contact-form" action="assets/php/mail.php" method="post">
                                                    <div className="contact-form">
                                                        <div className="contact-input">
                                                            <div className="contact-inner">
                                                                <input name="con_name" type="text" placeholder="Name *" />
                                                            </div>
                                                            <div className="contact-inner">
                                                                <input name="con_email" type="email" placeholder="Email *" />
                                                            </div>
                                                        </div>
                                                        <div className="contact-inner">
                                                            <input name="con_subject" type="text" placeholder="Subject *" />
                                                        </div>
                                                        <div className="contact-inner contact-message">
                                                            <textarea name="con_message" placeholder="Please describe what you need."></textarea>
                                                        </div>
                                                        <div className="submit-btn mt-20">
                                                            <button className="ht-btn ht-btn-md" type="submit">Send message</button>
                                                            <p className="form-messege"></p>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--====================  Conact us Section End  ====================--> */}

                            {/* <!--====================  Conact us info Start ====================--> */}
                            <div className="contact-us-info-wrappaer section-space--pb_100">
                                <div className="container">
                                    <div className="row align-items-center">
                                        {contactus.map((info) => (
                                            <>
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="conact-info-wrap mt-30">
                                                        <h5 className="heading mb-20">{info.location}</h5>
                                                        <ul className="conact-info__list">
                                                            <li>{info.address}</li>
                                                            <li><Link to="#" className="hover-style-link text-color-primary">{info.email}</Link></li>
                                                            <li><Link to="#" className="hover-style-link text-black font-weight--bold">{info.phone}</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </>
                                        ))}

                                    </div>
                                </div>
                            </div>
                            {/* <!--====================  Conact us info End  ====================--> */}


                            {/* <!--========== Call to Action Area Start ============--> */}
                            <div className="cta-image-area_one section-space--ptb_80 cta-bg-image_two">
                                <div className="container">
                                    <div className="row align-items-center">
                                        <div className="col-xl-8 col-lg-7">
                                            <div className="cta-content md-text-center">
                                                <h3 className="heading">We run all kinds of IT services that vow your <span className="text-color-primary"> success</span></h3>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-5">
                                            <div className="cta-button-group--two text-center">
                                                <Link to="#" className="btn btn--white btn-one"><span className="btn-icon me-2"><i className="far fa-comment-alt-dots"></i></span> Let's talk</Link>
                                                <Link to="#" className="btn btn--secondary btn-two "><span className="btn-icon me-2"><i className="far fa-info-circle"></i></span> Get info</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--========== Call to Action Area End ============--> */}


                        </div>


                        {/* <!--====================  footer area ====================--> */}


                    </div>
                </div>
            </>
        )
    }
}

export default App;