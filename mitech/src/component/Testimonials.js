import React, { Component } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sliders: []
        };
    }

    async componentDidMount() {
        try {
            const response = await axios.get("http://127.0.0.1:9000/api/slider/?page=testimonial");
            this.setState({ sliders: response.data });
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        const { sliders } = this.state;
        console.log(sliders)
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
                                                <h5 className="aheto-heading__subtitle">{slider.title}</h5>
                                                <h2 className="aheto-heading__title">{slider.heading}</h2>
                                                <p className="aheto-heading__title ">{slider.text}</p>
                                                {/* <!-- breadcrumb-list start --> */}
                                                <ul className="breadcrumb-list">
                                                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                                    <li className="breadcrumb-item"><Link to="/">About Us</Link></li>
                                                    <li className="breadcrumb-item active">Testimonials</li>
                                                </ul>
                                                {/* <!-- breadcrumb-list end --> */}
                                            </div>
                                        </>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- breadcrumb-area end --> */}


                    <div id="main-wrapper">
                        <div className="site-wrapper-reveal">
                            {/* <!--====================  testimonial section ====================--> */}
                            <div className="testimonial-slider-area section-space--ptb_120">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="section-title-wrap text-center section-space--mb_40">
                                                <h5 className="aheto-heading__subtitle"> Client is our greatest asset</h5>
                                                <h2 className="aheto-heading__title">Happy clients say</h2>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--====================  End of testimonial section  ====================--> */}


                            {/* <!--====================  testimonial section ====================--> */}
                            <div className="testimonial-slider-area section-space--ptb_120 bg-gray-3">
                                <div className="container-fluid container-fluid--cp-80">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="section-title-wrap text-center section-space--mb_60">
                                                <h5 className="aheto-heading__subtitle">Our candidates experiences of working with codersbrain</h5>
                                                <h2 className="aheto-heading__title">We Are Not Just a Team, We Are a Family</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--====================  End of testimonial section  ====================--> */}




                            {/* <!--========== Call to Action Area Start ============--> */}
                            <div className="cta-image-area_one section-space--ptb_80 cta-bg-image_one">
                                <div className="container">
                                    <div className="row align-items-center">
                                        <div className="col-xl-8 col-lg-7">
                                            <div className="cta-content md-text-center">
                                                <h2 className="aheto-heading__title text-white">Here to Help Your Every Business Need</h2>
                                                <p className="aheto-heading__desc text-white">We focus on the IT solutions, so you can focus on your business. See what we can do for you today!</p>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-5">
                                            <div className="cta-button-group--one text-center">
                                                <Link to="#" className="btn btn--white btn-one"><span className="btn-icon me-2"><i className="far fa-comment-alt-dots"></i></span> Let's talk</Link>
                                                <Link to="#" className="btn btn--secondary  btn-two"><span className="btn-icon me-2"><i className="far fa-info-circle"></i></span> Get A Free Quote!</Link>
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