import React, { Component } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sliders: [],
            brands: [],
            boxicon: [],
            company: [],
            funfact: [],
            largebox: [],
            projects: [],
            testimonial: []
        };
    }

    async componentDidMount() {
        try {
            const response = await axios.get("http://127.0.0.1:9000/api/slider/?page=index");
            this.setState({ sliders: response.data });
        } catch (error) {
            console.log(error);
        }
        try {
            const response = await axios.get("http://127.0.0.1:9000/api/brands/");
            this.setState({ brands: response.data });
        } catch (error) {
            console.log(error);
        }
        try {
            const response = await axios.get("http://127.0.0.1:9000/api/boxicon/?page=box");
            this.setState({ boxicon: response.data });
        } catch (error) {
            console.log(error);
        }
        try {
            const response = await axios.get("http://127.0.0.1:9000/api/company/");
            this.setState({ company: response.data });
        } catch (error) {
            console.log(error);
        }
        try {
            const response = await axios.get("http://127.0.0.1:9000/api/funfact/");
            this.setState({ funfact: response.data });
        } catch (error) {
            console.log(error);
        }
        try {
            const response = await axios.get("http://127.0.0.1:9000/api/boxicon/?page=largebox");
            this.setState({ largebox: response.data });
        } catch (error) {
            console.log(error);
        }
        try {
            const response = await axios.get("http://127.0.0.1:9000/api/gallery/?page=projects");
            this.setState({ projects: response.data });
        } catch (error) {
            console.log(error);
        }
        try {
            const response = await axios.get("http://127.0.0.1:9000/api/testimonial/");
            this.setState({ testimonial: response.data });
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        const { sliders, brands, boxicon, company, funfact, largebox, projects, testimonial } = this.state;
        return (
            <>
                <div>
                    <div id="main-wrapper">
                        <div className="site-wrapper-reveal">
                            {/* <!--============ Infotechno Hero Start ============--> */}
                            <div className="infotechno-hero infotechno-bg">
                                <div className="container-fluid">
                                    <div className="row align-items-center">
                                        {/* <!--baseline--> */}
                                        {sliders.map((slider) => (
                                            <>
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="infotechno-hero-text  wow move-up">
                                                        {/* {% comment %} <h6>{{ slider.title }} </h6> {% endcomment %} */}
                                                        <h1 className="font-weight--reguler mb-15" key={slider.id}>{slider.heading}</h1>
                                                        <p key={slider.id}>{slider.text} </p>
                                                        <Link to="/" className="aheto-btn aheto-btn--primary" target="_self" aria-label="Get Developers ">Get Developers </Link>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="infotechno-hero-inner-images">
                                                        <div className="infotechno-inner-one">
                                                            <img className="img-fluid" key={slider.id} src={require('../media' + slider.img1)} alt="" />
                                                            {/* <img className="img-fluid" key={slider.id} src={`http://127.0.0.1:9000/api/slider${slider.img1}`} alt="" /> */}
                                                        </div>
                                                        <div className="infotechno-inner-two  wow move-up">
                                                            <img className="img-fluid" key={slider.id} src={require('../media' + slider.img2)} alt="" />
                                                            {/* <img className="img-fluid" key={slider.id} src={`http://127.0.0.1:9000/api/slider${slider.img2}`} alt="" /> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            {/* <!--============ Infotechno Hero End ============--> */}
                            {/* <!--====================  brand logo slider area ====================--> */}
                            <div className="brand-logo-slider-area section-space--ptb_60">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            {/* <!-- brand logo slider --> */}
                                            <div className="brand-logo-slider__container-area">
                                                <div className="swiper-container brand-logo-slider__container">
                                                    <div className="swiper-wrapper brand-logo-slider__one">
                                                        {brands.map((brand) => (
                                                            <>
                                                                <div className="swiper-slide brand-logo brand-logo--slider">
                                                                    <Link to="/">
                                                                        <div className="brand-logo__image">
                                                                            <img key={brand.id} src={require('../media' + brand.logo)} className="img-fluid" alt="" />
                                                                        </div>
                                                                        <div className="brand-logo__image-hover">
                                                                            <img key={brand.id} src={require('../media' + brand.logo_hover)} className="img-fluid" alt="" />
                                                                        </div>
                                                                    </Link>
                                                                </div>
                                                            </>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--====================  End of brand logo slider area  ====================--> */}
                            {/* <!--===========  feature-images-wrapper  Start =============--> */}
                            <div className="feature-images-wrapper bg-gray section-space--ptb_100">
                                <div className="container">

                                    <div className="row">
                                        <div className="col-lg-12">
                                            {/* <!-- section-title-wrap Start --> */}
                                            <div className="section-title-wrap text-center">
                                                <h6 className="section-sub-title mb-20"> We enable you to win in the changing world of work.</h6>
                                                <h3 className="heading">Services that we provide</h3>
                                                <p>Services with low cost and high productivity.</p>
                                            </div>
                                            {/* <!-- section-title-wrap Start --> */}
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-12">
                                            <div className="feature-images__one">
                                                <div className="row">
                                                    {boxicon.map((box) => (
                                                        <>
                                                            <div className="col-lg-4 col-md-6 wow move-up">
                                                                {/* <!-- ht-box-icon Start --> */}
                                                                <div className="ht-box-images style-01">
                                                                    <div className="image-box-wrap">
                                                                        <div className="box-image">
                                                                            <img className="img-fulid" src={require('../media' + box.image)} alt="" />
                                                                        </div>
                                                                        <div className="content">
                                                                            <h5 key={box.id} className="heading">{box.heading} </h5>
                                                                            <div key={box.id} className="text">{box.text}
                                                                            </div>
                                                                            <div className="circle-arrow">
                                                                                <div className="middle-dot"></div>
                                                                                <div className="middle-dot dot-2"></div>
                                                                                <Link to="/">
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

                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--===========  feature-images-wrapper  End =============--> */}
                            {/* <!-- ============ Our Experience Wrapper Start =============== --> */}
                            <div className="section-space--ptb_100 infotechno-section-bg-01">

                                <div className="our-experience-wrapper">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-5">
                                                <div className="section-title small-mb__40 tablet-mb__40">
                                                    <h6 className="section-sub-title mb-20">Our company</h6>
                                                    <h3 className="heading">What makes us better</h3>
                                                    <p className="text mt-20">With excellent analysis, strategic, and technical skills, Codersbrain provides you talented On-Demand developers takes your idea beyond your wildest dreams. Our developers and HR quickly understand the clients' diverse requirements and work closely with your in-house team to deliver excellence at every touchpoint, having worked with a large portfolio. At codersbrain, you have complete freedom to select the resource that best meets your needs after evaluating their skills and expertise.</p>

                                                </div>
                                            </div>

                                            <div className="col-lg-5 offset-lg-2">
                                                <div className="ht-list style-auto-numbered-02">
                                                    {company.map((que) => (
                                                        <>
                                                            <div className="list-item">
                                                                <a className="link" href="/">
                                                                    <div className="list-header">
                                                                        <div key={que.id} className="marker">
                                                                            {que.question_no}
                                                                        </div>
                                                                        <div className="title-wrap">
                                                                            <h6 key={que.id} className="title">{que.question} </h6>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                        </>
                                                    ))}

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--=========== fun fact Wrapper Start ==========--> */}
                                <div className="fun-fact-wrapper">
                                    <div className="container">
                                        <div className="fun-fact-grid-4">
                                            {funfact.map((fact) => (
                                                <>
                                                    <div className="grid-item  wow move-up">
                                                        <div className="fun-fact--one text-center">
                                                            <h5 key={fact.id} className="fun-fact__title">{fact.funfact_title} </h5>
                                                            <div key={fact.id} className="fun-fact__count counter">{fact.funfact_count}</div>
                                                            <span key={fact.id} className="fun-fact__text">{fact.funfact_text}</span>
                                                        </div>
                                                    </div>
                                                </>
                                            ))}

                                        </div>
                                    </div>
                                </div>
                                {/* <!--=========== fun fact Wrapper End ==========--> */}
                                {/* <!--===========  feature-large-images-wrapper  Start =============--> */}
                                <div className="feature-large-images-wrapper section-space--pt_100">
                                    <div className="container">

                                        <div className="row">
                                            <div className="col-lg-12">
                                                {/* <!-- section-title-wrap Start --> */}
                                                <div className="section-title-wrap text-center section-space--mb_30">
                                                    <h6 className="section-sub-title mb-20">Our working process</h6>
                                                    <h3 className="heading">Our systematic and technology enabled approach, for the talent acquisition process encompasses of three key steps, that help us work on the needs of all key stakeholders</h3>
                                                </div>
                                                {/* <!-- section-title-wrap Start --> */}
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-12">
                                                <div className="row row--35">
                                                    {largebox.map((box) => (
                                                        <>
                                                            <div className="col-lg-4 col-md-6 mt-30">
                                                                {/* <!-- Box large image warap Start --> */}
                                                                <Link to="/" className="box-large-image__wrap wow move-up">
                                                                    <div className="box-large-image__box">
                                                                        <div className="box-large-image__midea">
                                                                            <div className="images-midea">
                                                                                <img key={box.id} src={require('../media' + box.image)} width="330" height="330" className="img-fluid" alt="" />

                                                                                <div className="button-wrapper">
                                                                                    <div className="btn tm-button">
                                                                                        <span className="button-text">Learn more</span>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="heading-wrap">
                                                                                    <h5 key={box.id} className="heading">{box.heading}</h5>
                                                                                </div>

                                                                            </div>
                                                                        </div>

                                                                        <div className="box-large-image__content mt-30 text-center">
                                                                            <p key={box.id}>{box.text}</p>
                                                                        </div>
                                                                    </div>
                                                                </Link>
                                                                {/* <!-- Box large image warap End --> */}
                                                            </div>
                                                        </>
                                                    ))}

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--===========  feature-large-images-wrapper  End =============--> */}

                            </div>
                            {/* <!-- ============ Our Experience Wrapper End =============== --> */}

                            {/* {% comment %} funfact {% endcomment %} */}

                            {/* <!--=========== Infotechno Video Wrapper Start ==========--> */}

                            {/* <!--=========== Infotechno Video Wrapper End ==========--> */}
                            {/* <!--===========  Projects wrapper Start =============--> */}
                            <div className="projects-wrapper projectinfotechno-bg section-space--ptb_100">
                                <div className="container">

                                    <div className="row">
                                        <div className="col-lg-12">
                                            {/* <!-- section-title-wrap Start --> */}
                                            <div className="section-title-wrap text-center section-space--mb_40">
                                                <h6 className="section-sub-title mb-20">Employee's Spotlight</h6>
                                                <h3 className="heading">Employees stories matter. Stories have been used to empower and to humanize. Stories also repair that broken dignity. Coders Brain presenting employee spotlight so that others might see fragments of themselves.

                                                </h3>
                                            </div>
                                            {/* <!-- section-title-wrap Start --> */}
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-12">
                                            <div className="projects-wrap swiper-container projects-slider__container">
                                                <div className="swiper-wrapper">
                                                    {projects.map((project) => (
                                                        <>
                                                            <div className="swiper-slide">
                                                                {/* <!-- Projects Wrap Start --> */}
                                                                <Link to="/" className="projects-wrap style-01 wow move-up">
                                                                    <div className="projects-image-box">
                                                                        <div className="projects-image">
                                                                            <img key={project.id} className="img-fluid" src={require('../media' + project.image)} alt="" />
                                                                        </div>
                                                                        {/* {% comment %} <div className="content">
                                                                    <h6 className="heading">{{ project.project_heading }}</h6>
                                                                    <div className="post-categories">{{ project.project_category }}</div>
                                                                    <div className="text">{{ project.project_text }}
                                                                    </div>
                                                                    <div className="box-projects-arrow">
                                                                        <span className="button-text">View case study</span>
                                                                        <i className="fa fa-long-arrow-right ml-1"></i>
                                                                    </div>
                                                                </div> {% endcomment %} */}
                                                                    </div>
                                                                </Link>
                                                                {/* <!-- Projects Wrap End --> */}
                                                            </div>
                                                        </>
                                                    ))}

                                                </div>
                                                <div className="swiper-pagination swiper-pagination-project mt_20"></div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--===========  Projects wrapper End =============--> */}
                            {/* <!--====================  testimonial section ====================--> */}
                            <div className="testimonial-slider-area section-space--ptb_120 bg-gray-3">
                                <div className="container-fluid container-fluid--cp-80">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="section-title-wrap text-center section-space--mb_60">
                                                <h6 className="section-sub-title mb-20">Happy clients say</h6>
                                                <h3 className="heading">Client is our greatest asset</h3>
                                                <p>We at codersbrain believe that "A satisfied customer is the best business strategy of all"</p>
                                            </div>
                                            <div className="testimonial-slider">
                                                <div className="swiper-container testimonial-slider__container-two">
                                                    <div className="swiper-wrapper testimonial-slider__wrapper">
                                                        {testimonial.map((test) => (
                                                            <>
                                                                <div className="swiper-slide">
                                                                    <div className="testimonial-slider__single wow move-up">
                                                                        {/* {% comment %} <h6 className="testimonial-subject">{{ test.subject }}</h6> {% endcomment %} */}
                                                                        <div key={test.id} className="testimonial-slider__text">{test.text} </div>
                                                                        <div className="author-info">
                                                                            <div className="testimonial-slider__media">
                                                                                <img key={test.id} src={require('../media' + test.img)} className="img-fluid" alt="" />
                                                                            </div>
                                                                            <div className="testimonial-slider__author">
                                                                                <h6 key={test.id} className="name">{test.name}</h6>
                                                                                <span key={test.id} className="designation">{test.post}</span>
                                                                            </div>
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                            </>
                                                        ))}

                                                    </div>
                                                </div>
                                                <div className="swiper-pagination swiper-pagination-t0 section-space--mt_40"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--====================  End of testimonial section  ====================--> */}
                            {/* <!--====================  Blog Section Start ====================--> */}

                            {/* <!--====================  Blog Section End  ====================--> */}

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
                                                    <Link to="/" className="btn btn--secondary">Contact us</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            {/* <!--====================  Conact us Section End  ====================--> */}
                        </div>

                        {/* <!--====================  footer area ====================--> */}

                        {/* <!--====================  End of footer area  ====================--> */}

                    </div>
                </div>
            </>
        )
    }
}

export default App;