import React, { Component } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sliders: [],
            success: [],
            security: []
        };
    }

    async componentDidMount() {
        try {
            const response = await axios.get("http://127.0.0.1:9000/api/slider/?page=servicedetails");
            this.setState({ sliders: response.data });
        } catch (error) {
            console.log(error);
        }
        try {
            const response = await axios.get("http://127.0.0.1:9000/api/success/?page=success");
            this.setState({ success: response.data });
        } catch (error) {
            console.log(error);
        }
        try {
            const response = await axios.get("http://127.0.0.1:9000/api/success/?page=security");
            this.setState({ security: response.data });
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        const { sliders, success, security } = this.state;
        console.log(sliders)
        return (
            <>
                <div>
                    <div id="main-wrapper">
                        <div className="site-wrapper-reveal">
                            {sliders.map((slider) => (
                                <>
                                    <div className="about-banner-wrap banner-space bg-img" data-bg={require('../media' + slider.img1)}>
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-lg-8 m-auto">
                                                    <div className="about-banner-content text-center">
                                                        <h1 className="mb-15 text-black">{slider.heading}</h1>
                                                        <h5 className="font-weight--normal text-black">{slider.text}</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ))}
                            {/* <!--===========  feature-large-images-wrapper  Start =============--> */}
                            <div className="feature-large-images-wrapper section-space--ptb_100">
                                <div className="container">
                                    <div className="cybersecurity-about-box">
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <div className="modern-number-01">
                                                    <h3 className="heading mt-30">Learn More About Our <span className="text-color-primary"> Success <br /> Stories</span></h3>
                                                </div>
                                            </div>
                                            <div className="col-lg-7 offset-lg-1">
                                                <div className="conact-us-wrap-one managed-it">
                                                    <h5 className="heading ">Mitech specializes in <span className="text-color-primary"> technological and IT-related services</span> such as product engineering, warranty management, building cloud, infrastructure, network, etc. </h5>

                                                    <div className="sub-heading">We’re available for 8 hours a day!<br />Contact to require a detailed analysis and assessment of your plan.</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            {/* <!--===========  feature-large-images/-wrapper  End =============--> */}

                            <div className="accordion-wrapper section-space--pb_100">
                                <div className="container">
                                    <div className="row ">
                                        <div className="col-lg-6 pe-5">
                                            <div className="faq-two-wrapper section-space--mt_40">
                                                <div id="accordion_two">
                                                    {success.map((card) => (
                                                        <>
                                                            <div className="card">
                                                                <div className="card-header" id="heading__10">
                                                                    <h5 className="mb-0 font-weight--bold">
                                                                        <button className="btn-link" data-bs-toggle="collapse" data-bs-target="#tab__10" aria-expanded="true" aria-controls="tab__10">
                                                                            {card.story} <span>
                                                                                <i className="far fa-caret-circle-down"></i>
                                                                                <i className="far fa-caret-circle-right"></i> </span>
                                                                        </button>
                                                                    </h5>
                                                                </div>

                                                                <div id="tab__10" className="show" aria-labelledby="heading__10" data-bs-parent="#accordion_two">
                                                                    <div className="card-body">
                                                                        <p>{card.text} </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </>
                                                    ))}

                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            {/* <!-- Start single-popup-wrap --> */}
                                            <div className="video-interview section-space--mt_40 video-popup">
                                                <Link to="https://www.youtube.com/watch?v=9No-FiEInLA" className="video-link mt-30">
                                                    <div className="single-popup-wrap">
                                                        <img className="img-fluid border-radus-5" src="assets/images/bg/mitech-home-infotechno-box-large-image-03-540x320.webp" alt="" />
                                                        <div className="ht-popup-video video-button">
                                                            <div className="video-mark">
                                                                <div className="wave-pulse wave-pulse-1"></div>
                                                                <div className="wave-pulse wave-pulse-2"></div>
                                                            </div>
                                                            <div className="video-button__two">
                                                                <div className="video-play">
                                                                    <span className="video-play-icon"></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            {/* <!-- End single-popup-wrap --> */}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!--===========  feature-icon-wrapper  Start =============--> */}
                            <div className="feature-icon-wrapper section-space--pb_70">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="section-title-wrap text-center section-space--mb_20">
                                                <h3 className="heading">Prominent IT Security Services</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="feature-list__three">
                                                <div className="row">
                                                    {security.map((grid) => (
                                                        <>
                                                            <div className="col-lg-6">
                                                                <div className="grid-item animate">
                                                                    <div className="ht-box-icon style-03">
                                                                        <div className="icon-box-wrap">
                                                                            <div className="content-header">
                                                                                <div className="icon">
                                                                                    <i className="fal fa-shield-check"></i>
                                                                                </div>
                                                                                <h5 className="heading">
                                                                                    {grid.story}
                                                                                </h5>
                                                                            </div>
                                                                            <div className="content">
                                                                                <div className="text">{grid.text}</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </>
                                                    ))}

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--===========  feature-icon-wrapper  End =============--> */}


                            {/* <!--========= Pricing Table Area Start ==========--> */}
                            <div className="pricing-table-area section-space--ptb_100 bg-gray">
                                <div className="pricing-table-title-area position-relative">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="section-title-wrapper text-center section-space--mb_40 wow move-up">
                                                    <h6 className="section-sub-title mb-20">Style 01</h6>
                                                    <h3 className="section-title">Affordable price plans<span className="text-color-primary"> for you!</span></h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="pricing-table-content-area">
                                    <div className="container">

                                        <div className="row">
                                            <div className="col-12 text-center wow move-up">
                                                <ul className="nav justify-content-center ht-plans-menu  section-space--mb_60" role="tablist">
                                                    <li className="tab__item nav-item active">
                                                        <a className="nav-link active" data-bs-toggle="tab" href="#month-tab" role="tab" aria-selected="true">Per month</a>
                                                    </li>
                                                    <li className="tab__item nav-item ">
                                                        <a className="nav-link" data-bs-toggle="tab" href="#year-tab" role="tab" aria-selected="false">Per year</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--========= Pricing Table Area End ==========--> */}



                            {/* <!--========== Call to Action Area Start ============--> */}
                            <div className="cta-image-area_one section-space--ptb_80 cta-bg-image_one">
                                <div className="container">
                                    <div className="row align-items-center">
                                        <div className="col-xl-8 col-lg-7">
                                            <div className="cta-content md-text-center">
                                                <h3 className="heading text-white">We run all kinds of IT services that vow your <span className="text-color-secondary"> success</span></h3>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-5">
                                            <div className="cta-button-group--one text-center">
                                                <Link to="#" className="btn btn--white btn-one"><span className="btn-icon me-2"><i className="far fa-comment-alt-dots"></i></span> Let's talk</Link>
                                                <Link to="#" className="btn btn--secondary  btn-two"><span className="btn-icon me-2"><i className="far fa-info-circle"></i></span> Get info</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--========== Call to Action Area End ============--> */}

                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default App;
