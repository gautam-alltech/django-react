import React, { Component } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sliders: [],
            jobs: [],
            gallery: []
        };
    }

    async componentDidMount() {
        try {
            const response = await axios.get("http://127.0.0.1:9000/api/slider/?page=careers");
            this.setState({ sliders: response.data });
        } catch (error) {
            console.log(error);
        }
        try {
            const response = await axios.get("http://127.0.0.1:9000/api/jobs/");
            this.setState({ jobs: response.data });
        } catch (error) {
            console.log(error);
        }
        try {
            const response = await axios.get("http://127.0.0.1:9000/api/gallery/?page=gallery");
            this.setState({ gallery: response.data });
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        const { sliders, jobs, gallery } = this.state;
        // console.log(sliders)
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
                                                <h5>{slider.title}</h5>
                                                <h1 className="breadcrumb-title">{slider.heading}</h1>
                                                <p>{slider.text}</p>
                                                {/* <!-- breadcrumb-list start --> */}
                                                <ul className="breadcrumb-list">
                                                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                                    <li className="breadcrumb-item active">Careers</li>
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
                            {/* <!--======== careers-experts Start ==========--> */}
                            <div className="careers-experts-wrapper section-space--pt_100">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-7 m-auto">
                                            {/* <!-- section-title-wrap Start --> */}
                                            <div className="section-title-wrap text-center section-space--mb_30">
                                                <span className="text-color-primary"> Become a part of us</span>
                                                <h3 className="heading">Join Our Big Family! </h3>
                                                <p>Visualize yourself in one of the world’s best workplaces, surrounded by teams and people who will challenge, encourage, and inspire you to be extraordinary.</p>
                                            </div>
                                            {/* <!-- section-title-wrap Start --> */}
                                        </div>
                                    </div>


                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="ht-simple-job-listing move-up animate">
                                                <div clas="list">
                                                    {jobs.map((job) => (
                                                        <>
                                                            <div className="item">
                                                                <div className="row">
                                                                    <div className="col-md-3">
                                                                        <div className="job-info">
                                                                            <h5 className="job-name">{job.job_name}</h5>
                                                                            <span className="job-time">{job.job_time}</span>
                                                                        </div>
                                                                    </div>

                                                                    <div className="col-md-6">
                                                                        <div className="job-description">{job.job_desc}</div>
                                                                    </div>

                                                                    <div className="col-md-3">
                                                                        <div className="job-button text-md-center">
                                                                            <a className="ht-btn ht-btn-md ht-btn--solid" href="#">
                                                                                <span className="button-text">Get started </span>
                                                                            </a>
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
                            {/* <!--======== careers-experts End ==========--> */}

                            <div className="gallery-section section-space--ptb_100">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="section-title-wrap text-center">
                                                <h3 className="section-title mb-15 wow move-up">Here to Help Your Every Business Need</h3>
                                                <p>We focus on the IT solutions, so you can focus on your business. See what we can do for you today!</p>

                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- gallery-wrapper Start --> */}
                                    <div className="gallery-wrapper section-space--pt_80 ">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                {/* <!-- gallery-warp Start --> */}
                                                <div className="gallery-warp popup-images ">
                                                    {/* <!-- single gallery Start --> */}
                                                    {gallery.map((item) => (
                                                        <>
                                                            <a className="single-gallery gallery-grid wow move-up" href={require('../media' + item.image)}>
                                                                <div className="single-gallery__item">
                                                                    <div className="single-gallery__thum bg-item-images bg-img" data-bg={require('../media' + item.image)}>

                                                                    </div>
                                                                    <div className="ht-overlay"></div>
                                                                    <div className="overlay-icon">
                                                                        <i className="far fa-search"></i>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </>
                                                    ))}
                                                    {/* <!-- single gallery End --> */}

                                                </div>
                                                {/* <!-- gallery-warp End --> */}
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- gallery-wrapper End --> */}

                                </div>
                            </div>

                            {/* <!--====================  Conact us Section Start ====================--> */}
                            <div className="contact-us-section-wrappaer infotechno-contact-us-bg section-space--ptb_120">
                                <div className="container">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6 col-lg-6">
                                            <div className="conact-us-wrap-one">
                                                <h3 className="heading">Obtaining further information by <span className="text-color-primary">make a contact</span> with our experienced IT staffs. </h3>

                                                <div className="sub-heading">We’re available for 8 hours a day!<br />Contact to require a detailed analysis and assessment of your plan.</div>

                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-lg-6">
                                            <div className="contact-info-one text-center">
                                                <div className="icon">
                                                    <span className="fal fa-phone"></span>
                                                </div>
                                                <h6 className="heading font-weight--reguler">Reach out now!</h6>
                                                <h2 className="call-us"><Link to="tel:190068668">1900 68668</Link></h2>
                                                <div className="contact-us-button mt-20">
                                                    <Link to="#" className="btn btn--secondary">Contact us</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--====================  Conact us Section End  ====================--> */}

                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default App;