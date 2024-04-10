import React, { Component } from 'react';
import axios from 'axios';
import Header from './component/Header';
import Footer from './component/Footer';
import Home from "./component/Home";
import ContactUs from "./component/ContactUs";
import Services from "./component/Services";
import ServiceDetails from "./component/ServiceDetails";
import Careers from "./component/Careers";
import AboutUs from "./component/AboutUs";
import Leadership from "./component/Leadership";
import WhyChooseUs from "./component/WhyChooseUs";
import Testimonials from "./component/Testimonials";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sliders: []
    };
  }

  async componentDidMount() {
    try {
      const response = await axios.get("http://127.0.0.1:9000/api/slider/?page=index");
      this.setState({ sliders: response.data });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { sliders } = this.state;
    return (
      <><Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/contactus" element={<ContactUs/>}></Route>
          <Route exact path="/services" element={<Services/>}></Route>
          <Route exact path="/servicedetails" element={<ServiceDetails/>}></Route>
          <Route exact path="/careers" element={<Careers/>}></Route>
          <Route exact path="/aboutus" element={<AboutUs/>}></Route>
          <Route exact path="/leadership" element={<Leadership/>}></Route>
          <Route exact path="/whychooseus" element={<WhyChooseUs/>}></Route>
          <Route exact path="/testimonials" element={<Testimonials/>}></Route>
          
        </Routes>
        {/* <Home/> */}
        {/* <div className="App">
          <h1>Connect django react</h1>
          {sliders.map((slider, i) => (
            <h3 key={i}>{slider.id} {slider.heading}</h3>
          ))}
        </div> */}
        <Footer />
        </Router>
      </>
    );
  }
}

export default App;
