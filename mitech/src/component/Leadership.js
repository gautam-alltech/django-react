import React, { Component } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sliders: [],
            memberlist: []
        };
    }

    async componentDidMount() {
        try {
            const response = await axios.get("http://127.0.0.1:9000/api/slider/?page=leadership");
            this.setState({ sliders: response.data });
        } catch (error) {
            console.log(error);
        }
        try {
            const response = await axios.get("http://127.0.0.1:9000/api/memberlist/");
            this.setState({ memberlist: response.data });
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        const { sliders, memberlist } = this.state;
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
                                        <h2 className="breadcrumb-title">{slider.heading}</h2>
                                        {/* <!-- breadcrumb-list start --> */}
                                        <ul className="breadcrumb-list">
                                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                            <li className="breadcrumb-item"><Link to="/">About Us</Link></li>
                                            <li className="breadcrumb-item active">Leadership</li>
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
                            {/* <!-- ============ Team Member Wrapper Start =============== --> */}
                            <div className="team-member-wrapper section-space--pt_100 section-space--pb_70">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="section-title section-space--mb_60 text-center">
                                                <h3 className="heading">We pride ourselves on having a team <br /> of <span className="text-color-primary">highly-skilled</span> experts</h3>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            {/* <!-- ============ Team Member Wrapper End =============== --> */}

                            <div className="list-member-area section-space--pb_70">
                                <div className="container">
                                    <div className="row">
                                        {memberlist.map((member) => (
                                            <>
                                                <div className="col-lg-3 col-md-6 team_member-list mb-30">
                                                    <h6 className="team__title mb-20">{member.title}</h6>
                                                    <ul className="footer-widget__list">
                                                        <li><Link to="#" className="hover-style-default">{member.member1}</Link></li>
                                                        <li><Link to="#" className="hover-style-default">{member.member2}</Link></li>
                                                        <li><Link to="#" className="hover-style-default">{member.member3}</Link></li>
                                                        <li><Link to="#" className="hover-style-default">{member.member4}</Link></li>
                                                    </ul>
                                                </div>
                                            </>
                                        ))}

                                    </div>
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


                        {/* <!--====================  footer area ====================--> */}
                    </div>
                </div>
            </>
        )
    }
}

export default App;