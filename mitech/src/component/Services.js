import React, { Component } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sliders: [],
            services: [],
            advices: []
        };
    }

    async componentDidMount() {
        try {
            const response = await axios.get("http://127.0.0.1:9000/api/slider/?page=services");
            this.setState({ sliders: response.data });
        } catch (error) {
            console.log(error);
        }
        try {
            const response = await axios.get("http://127.0.0.1:9000/api/boxicon/?page=services");
            this.setState({ services: response.data });
        } catch (error) {
            console.log(error);
        }
        try {
            const response = await axios.get("http://127.0.0.1:9000/api/advice/");
            this.setState({ advices: response.data });
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        const { sliders, services, advices } = this.state;
        console.log(typeof(advices))
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
                                        <h5>{ slider.title }</h5>
                                        <h1 className="breadcrumb-title">{ slider.heading }</h1>
                                        <p>{ slider.text }</p>
                                        {/* <!-- breadcrumb-list start --> */}
                                        <ul className="breadcrumb-list">
                                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                            <li className="breadcrumb-item"><Link to="/">Services</Link></li>
                                            <li className="breadcrumb-item active">IT Services</li>
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


                    <div div id="main-wrapper" >
                        <div className="site-wrapper-reveal">
                            {/* <!--===========  feature-images-wrapper  Start =============--> */}
                            <div className="feature-images-wrapper section-space--ptb_100">
                                <div className="container">

                                    <div className="row">
                                        <div className="col-lg-12">
                                            {/* <!-- section-title-wrap Start --> */}
                                            <div className="section-title-wrap text-center">
                                                <h5>Our Core Services</h5>
                                                <h3 className="heading">Solutions for Businesses</h3>
                                            </div>
                                            {/* <!-- section-title-wrap Start --> */}
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-12">
                                            <div className="feature-images__one">
                                                <div className="row">
                                                {services.map((service) => (
                                        <>
                                                    <div className="col-lg-4 col-md-6 wow move-up">
                                                        {/* <!-- ht-box-icon Start --> */}
                                                        <div className="ht-box-images style-01">
                                                            <div className="image-box-wrap">
                                                                <div className="box-image">
                                                                    <img className="img-fulid" src={require('../media' + service.image)} alt=""/>
                                                                </div>
                                                                <div className="content">
                                                                    <h5 className="heading">{ service.heading } </h5>
                                                                    <div className="text">{ service.text }
                                                                    </div>
                                                                    <div className="circle-arrow">
                                                                        <div className="middle-dot"></div>
                                                                        <div className="middle-dot dot-2"></div>
                                                                        <Link to="#">
                                                                            <i className="far fa-long-arrow-right"></i>
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* <!-- ht-box-icon End --> */}
                                                    </div>
                                                    </>
                                    ))}

                                                </div>
                                            </div>
                                            <div className="section-under-heading text-center section-space--mt_80">
                                                <h3>Here to Help Your Every Business Need</h3>
                                                <p>We focus on the IT solutions, so you can focus on your business. See what we can do for you today!</p></div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--=========== feature-images-wrapper End=============--> */}
                            {/* <!--============ Contact Us Area Start =================--> */}
                            <div className="contact-us-area infotechno-contact-us-bg section-space--pt_100">
                                <div className="container">
                                    <div className="row align-items-center">
                                    {/* {advices.map((advice) => (
                                        <> */}
                                        <div className="col-lg-7">
                                            <div className="image">
                                                <img className="img-fluid" src="/media/{{advice.img}}" alt=""/>
                                                {/* <img className="img-fluid" src={require('../media' + advices.img )}alt=""/> */}
                                            </div>
                                        </div>

                                        <div className="col-lg-4 ms-auto">
                                            <div className="contact-info style-two text-left">

                                                <div className="contact-info-title-wrap text-center">
                                                    <h3 className="heading  mb-10">{ advices.rating }/5.0</h3>
                                                    <div className="ht-star-rating lg-style">
                                                        <span className="fa fa-star"></span>
                                                        <span className="fa fa-star"></span>
                                                        <span className="fa fa-star"></span>
                                                        <span className="fa fa-star"></span>
                                                        <span className="fa fa-star"></span> </div>
                                                    <p className="sub-text">{ advices.text }</p>
                                                </div>

                                                <div className="contact-list-item">
                                                    <Link to="tel:190068668" className="single-contact-list">
                                                        <div className="content-wrap">
                                                            <div className="content">
                                                                <div className="icon">
                                                                    <span className="fal fa-phone"></span>
                                                                </div>
                                                                <div className="main-content">
                                                                    <h6 className="heading">{ advices.phone_heading }</h6>
                                                                    <div className="text">{ advices.phone }</div>
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
                                                                    <h6 className="heading">{ advices.email_heading }</h6>
                                                                    <div className="text">{ advices.email }</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>

                                            </div>
                                        </div>
                                        {/* </>
                                    ))} */}
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