import User from "./User";
import Userclass from "./Userclass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);

    console.log("Parent constructor ");
  }
  componentDidMount() {
    console.log("Parent componentDidMount");
  }
  render() {
    console.log("Parent Render");
    return (
      <div className="about">
        {/* <h1>This is About Us</h1> */}

        <p className="about-paragraph">
          <span>&#8220;</span>
          <br></br>
          Our mission is to elevate the quality of life for the urban consumer
          with unparalleled convenience. Convenience is what makes us tick. It's
          what makes us get out of bed and say, "Let's do this."
        </p>
        <div className="about-journey">Journey</div>
        <img
          className="jurney-logo"
          src="https://media.licdn.com/dms/image/D4D12AQHBW3Sbi_vnbQ/article-cover_image-shrink_720_1280/0/1691501629759?e=1717027200&v=beta&t=ZuuH5iT_DX-Mrl3wyj5csJjVnV698kidbOd_Dcd3yhc"
        />

        <div className="about-future">What’s In Store For The Future?</div>
        <p className="about-future-paragraph">
          Store has grand plans to be India’s most loved hyperlocal player. It
          aims to be the most accessible platform on the network - reimagining
          the meaning of convenience in the country through a variety of service
          offerings.
        </p>
        <hr></hr>

        <div className="about-score">
          <div className="score-heading">
            <li>Changing</li>
            <li> the game</li>
          </div>
          <div className="about-score-box">
            <li className="score-heading">15000+</li>
            <li>Restaurant Partners Countrywide</li>
          </div>
          <div className="about-score-box">
            <li className="score-heading">5000+</li>
            <li>Employees across the Country</li>
          </div>
          <div className="about-score-box">
            <li className="score-heading">260000+</li>
            <li>Delivery Executives</li>
          </div>
          <div className="about-score-box">
            <li className="score-heading">500+</li>
            <li>Cities PAN India</li>
          </div>
        </div>

        {/* <Userclass name="Satyam Garde" location="Baramati" /> */}
      </div>
    );
  }
}

export default About;
