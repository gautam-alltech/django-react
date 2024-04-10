import React, { Component } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sliders: [],
            progresschart: [],
            features: []
        };
    }

    async componentDidMount() {
        try {
            const response = await axios.get("http://127.0.0.1:9000/api/slider/?page=whychooseus");
            this.setState({ sliders: response.data });
        } catch (error) {
            console.log(error);
        }
        try {
            const response = await axios.get("http://127.0.0.1:9000/api/progresschart/");
            this.setState({ progresschart: response.data });
        } catch (error) {
            console.log(error);
        }
        try {
            const response = await axios.get("http://127.0.0.1:9000/api/boxicon/?page=features");
            this.setState({ features: response.data });
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        const { sliders, progresschart, features } = this.state;
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
                                                <h1 className="aheto-heading__title">{slider.heading}</h1>
                                                <p className="aheto-heading__title ">{slider.text}</p>
                                                {/* <!-- breadcrumb-list start --> */}
                                                <ul className="breadcrumb-list">
                                                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                                    <li className="breadcrumb-item"><Link to="/">About Us</Link></li>
                                                    <li className="breadcrumb-item active">Why choose us</li>
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
                            {/* <!--===========  feature-large-images-wrapper  Start =============--> */}
                            <div className="feature-large-images-wrapper section-space--ptb_100">
                                <div className="container">

                                    <div className="row">
                                        <div className="col-lg-12">
                                            {/* <!-- section-title-wrap Start --> */}
                                            <div className="section-title-wrap text-center section-space--mb_30">
                                                <h5 className="aheto-heading__subtitle">Lets Know  About MiTech</h5>
                                                <h2 className="aheto-heading__title">What makes us better</h2>
                                                <p>With excellent analysis, strategic, and technical skills, MiTech provides you talented On-Demand developers takes your idea beyond your wildest dreams. Our developers and HR quickly understand the clients’ diverse requirements and work closely with your in-house team to deliver excellence at every touchpoint, having worked with a large portfolio. At Coders Brain, you have complete freedom to select the resource that best meets your needs after evaluating their skills and expertise.</p>
                                            </div>
                                            {/* <!-- section-title-wrap Start --> */}
                                        </div>
                                    </div>

                                    <div className="cybersecurity-about-box">
                                        <div className="row">
                                            <div className="col-lg-4 offset-lg-1">
                                                <div className="modern-number-01  mt-30">
                                                    <h2 className="heading  me-5"><span className="mark-text">38</span>Years’ Experience in IT</h2>
                                                    <h3 className="heading mt-30">Learn More About Our <span className="text-color-primary"> Success <br />Stories </span> </h3>
                                                </div>
                                            </div>

                                            <div className="col-lg-6 offset-lg-1 wow move-up">
                                                <div className="progress-bar--one mt-30 section-space--mb_60">
                                                    {/* <!-- Start Single Progress Charts --> */}
                                                    {progresschart.map((chart) => (
                                                        <>
                                                            <div className="progress-charts">
                                                                <h6 className="heading ">{chart.heading}</h6>
                                                                <div className="progress">
                                                                    <div className="progress-bar wow fadeInLeft" data-wow-duration="0.5s" data-wow-delay=".3s" role="progressbar" style={{width: chart.progress}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"><span className="percent-label">{chart.progress}</span></div>
                                                                </div>
                                                            </div>
                                                        </>
                                                    ))}
                                                    {/* <!-- End Single Progress Charts --> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                {/* <!--===========  feature-large-images-wrapper  Start =============--> */}
                                <div className="feature-large-images-wrapper section-space--pt_70">
                                    <div className="container">

                                        <div className="row">
                                            <div className="col-12">
                                                <div className="row row--35">
                                                    {features.map((feature) => (
                                                        <>
                                                            <div className="col-lg-4 col-md-6 mt-30">
                                                                {/* <!-- Box large image warap Start --> */}
                                                                <Link to="#" className="box-large-image__wrap wow move-up">
                                                                    <div className="box-large-image__box">
                                                                        <div className="box-large-image__midea">
                                                                            <div className="images-midea">
                                                                                <img src={require('../media' + feature.image)} className="img-fluid" alt="" />
                                                                                <div className="button-wrapper">
                                                                                    <div className="btn tm-button">
                                                                                        <span className="button-text">Learn more</span>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="heading-wrap">
                                                                                    <h5 className="heading">{feature.heading}</h5>
                                                                                </div>

                                                                            </div>
                                                                        </div>

                                                                        <div className="box-large-image__content mt-30 text-center">
                                                                            <p>{feature.text}</p>
                                                                        </div>
                                                                    </div>
                                                                </Link>
                                                                {/* <!-- Box large image warap End --> */}
                                                            </div>
                                                        </>
                                                    ))}

                                                </div>

                                                <div className="section-under-heading text-center section-space--mt_40">
                                                    <h2 className="aheto-heading__title">Here to Help Your Every Business Need</h2>
                                                    <p className="aheto-heading__desc">We focus on the IT solutions, so you can focus on your business. See what we can do for you today!</p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--===========  feature-large-images-wrapper  End =============--> */}



                            </div>
                            {/* <!--===========  feature-large-images-wrapper  End =============--> */}
                            {/* <!--============ Contact Us Area Start =================--> */}
                            <div className="contact-us-area infotechno-contact-us-bg section-space--pt_100">
                                <div className="container">
                                    <div className="row align-items-center">
                                        <div className="col-lg-7">
                                            <div className="image">
                                                <img className="img-fluid" src="assets/images/banners/home-cybersecurity-contact-bg-image.webp" alt="" />
                                            </div>
                                        </div>

                                        <div className="col-lg-4 ms-auto">
                                            <div className="contact-info style-two text-left">

                                                <div className="contact-info-title-wrap text-center">
                                                    <h3 className="heading  mb-10">4.9/5.0</h3>
                                                    <div className="ht-star-rating lg-style">
                                                        <span className="fa fa-star"></span>
                                                        <span className="fa fa-star"></span>
                                                        <span className="fa fa-star"></span>
                                                        <span className="fa fa-star"></span>
                                                        <span className="fa fa-star"></span>
                                                    </div>
                                                    <p className="sub-text">by 700+ customers for 3200+ clients</p>
                                                </div>

                                                <div className="contact-list-item">
                                                    <Link to="tel:190068668" className="single-contact-list">
                                                        <div className="content-wrap">
                                                            <div className="content">
                                                                <div className="icon">
                                                                    <span className="fal fa-phone"></span>
                                                                </div>
                                                                <div className="main-content">
                                                                    <h6 className="heading">Call for advice now!</h6>
                                                                    <div className="text">1900 68668</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                    <Link to="mailto:hello@mitech.com" className="single-contact-list">
                                                        <div className="content-wrap">
                                                            <div className="content">
                                                                <div className="icon">
                                                                    <span className="fal fa-envelope"></span>
                                                                </div>
                                                                <div className="main-content">
                                                                    <h6 className="heading">Say hello</h6>
                                                                    <div className="text">hello@mitech.com</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--============ Contact Us Area End =================--> */}
                        </div>


                        {/* <!--====================  footer area ====================--> */}
                    </div>
                </div>
            </>
        )
    }
}

export default App;