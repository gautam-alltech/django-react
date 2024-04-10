import React, { Component } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sliders: [],
            aboutusstory: [],
            aboutussolution: []
        };
    }

    async componentDidMount() {
        try {
            const response = await axios.get("http://127.0.0.1:9000/api/slider/?page=aboutus");
            this.setState({ sliders: response.data });
        } catch (error) {
            console.log(error);
        }
        try {
            const response = await axios.get("http://127.0.0.1:9000/api/boxicon/?page=aboutusstory");
            this.setState({ aboutusstory: response.data });
        } catch (error) {
            console.log(error);
        }
        try {
            const response = await axios.get("http://127.0.0.1:9000/api/aboutussolution/");
            this.setState({ aboutussolution: response.data });
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        const { sliders, aboutusstory, aboutussolution} = this.state;
        console.log(sliders)
        return (
            <>
                <div>
                    <div id="main-wrapper">
                        <div className="site-wrapper-reveal">
                            <div className="about-banner-wrap banner-space about-us-bg">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-8 m-auto">
                                            {sliders.map((slider) => (
                                                <>
                                                    <div className="about-banner-content text-center">
                                                        <h5>{slider.title}</h5>
                                                        <h1 className="mb-15 text-white">{slider.heading}</h1>
                                                        <h5 className="font-weight--normal text-white">{slider.text} </h5>
                                                    </div>
                                                </>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--===========  feature-large-images-wrapper  Start =============--> */}
                            <div className="feature-large-images-wrapper section-space--ptb_100">
                                <div className="container">

                                    <div className="row">
                                        <div className="col-lg-12">
                                            {/* <!-- section-title-wrap Start --> */}
                                            <div className="section-title-wrap text-center section-space--mb_60">
                                                <h6 className="section-sub-title mb-20">Lets Know About MiTech</h6>
                                                <h1 className="heading">Who we are</h1>
                                            </div>
                                            {/* <!-- section-title-wrap Start --> */}
                                        </div>
                                    </div>

                                    <div className="cybersecurity-about-box section-space--pb_70">
                                        <div className="row">
                                            <div className="col-lg-4 offset-lg-1">
                                                <div className="modern-number-01">
                                                    <h2 className="heading  me-5"><span className="mark-text">38</span>Years’ Experience in IT</h2>
                                                    <h6 className="heading mt-30">More About Our Success Stories</h6>
                                                </div>
                                            </div>

                                            <div className="col-lg-5 offset-lg-1">
                                                <div className="cybersecurity-about-text">
                                                    <div className="text">Founded in 2015, MiTech promotes innovation in the IT sector through excellence and transparency. In the last 7 years, MiTech has grown into one of the world’s leading consultancies, offering offshore development services all over the world (USA, UK, Australia, Europe, Canada, India, Singapore, Africa) and providing end-to-end impeccable digital and business solutions that partner with its clients to simplify, strengthen, and transform their businesses. We have worked with enterprises, software companies, SMEs, and startups to provide solutions to their various IT requirements. We provide them with high-quality performance services as technology partners. Through a deep commitment to our clients, extensive industry expertise, and a global network of innovation and delivery centers, we ensure the highest levels of certainty and satisfaction.</div>
                                                    <div className="button-text">
                                                        <Link to="#" className="btn-text">
                                                            Discover now
                                                            <span className="button-icon ml-1">
                                                                <i className="far fa-long-arrow-right"></i>
                                                            </span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="row">
                                        <div className="col-12">
                                            <div className="feature-images__six">
                                                <div className="row">
                                                    {aboutusstory.map((story) => (
                                                        <>
                                                            <div className="col-lg-4 col-md-6 wow move-up">
                                                                {/* <!-- ht-box-icon Start --> */}
                                                                <div className="ht-box-images style-06">
                                                                    <div className="image-box-wrap">
                                                                        <div className="box-image">
                                                                            <div className="default-image">
                                                                                <img className="img-fulid" src={require('../media' + story.image)} alt="" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="content">
                                                                            <h5 className="heading">{story.heading}</h5>
                                                                            <div className="text">{story.text}
                                                                            </div>
                                                                            <Link to="#" className="box-images-arrow">
                                                                                <span className="button-text">Discover now</span>
                                                                                <i className="far fa-long-arrow-right"></i>
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* <!-- ht-box-icon End --> */}
                                                            </div>
                                                        </>
                                                    ))}

                                                </div>
                                            </div>

                                            <div className="section-under-heading text-center section-space--mt_60">Challenges are just opportunities in disguise. <Link to="#">Take the challenge!</Link></div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--===========  feature-large-images-wrapper  End =============--> */}




                            {/* <!--========= About Resources Wrapper Start ===========--> */}
                            <div className="about-resources-wrapper">
                                <div className="container-fluid">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6 order-2 order-lg-1">
                                            <div className="resources-left-box">
                                                <div className="resources-inner">
                                                    <h6 className="sub-title mb-20">Resources</h6>
                                                    <h3 className="heading">Get a copy of brochure on <span className="text-color-primary"> Brand New IT Tech.</span></h3>
                                                    <div className="button mt-30">
                                                        <Link to="#" className="ht-btn ht-btn-md">Download now (3MB)</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 order-1 order-lg-2">
                                            <div className="resources-right-box">
                                                <div className="resources-right-inner text-center">
                                                    <div className="resources-images">
                                                        <img className="img-fluid" src="assets/images/banners/managed-it-services-book-cover.webp" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--========= About Resources Wrapper End ===========--> */}
                            {/* <!--========= About Delivering Wrapper Start ===========--> */}
                            <div className="about-delivering-wrapper section-space--ptb_100">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="section-title-wrap text-center section-space--mb_20">
                                                <h3 className="heading">We excel in delivering <br />optimal solutions.</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        {aboutussolution.map((solution) => (
                                            <>
                                                <div className="col-lg-6">
                                                    <div className="delivering-optimal-wrap">
                                                        <div className="list-item">
                                                            <div className="marker"></div>
                                                            <div className="title-wrap">
                                                                <h5 className="title"> {solution.title} </h5>
                                                                <div className="desc">{solution.desc} </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            {/* <!--=========== fun fact Wrapper Start ==========--> */}

                            {/* <!--=========== fun fact Wrapper End ==========--> */}
                            {/* <!--====================  testimonial section ====================--> */}

                            {/* <!--====================  End of testimonial section  ====================--> */}

                            {/* <!--====================  brand logo slider area ====================--> */}

                            {/* <!--====================  End of brand logo slider area  ====================--> */}
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