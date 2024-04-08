import React from "react";
import { LOGO_URL } from "../Utils/constants";

const currYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-img-container">
          <img src={LOGO_URL} alt="Logo" />
          <h3>Bitezy</h3>
          <p>
            Copyright &copy; {currYear}, Made with 🤍 by <strong>Satyam</strong>
          </p>
        </div>
        <div className="footer-column">
          <h3 className=" text-3xl text-green-600">Company</h3>
          <ul>
            <li>About</li>
            <li>Careers</li>
            <li>Team</li>
            <li>Swiggy One</li>
            <li>Swiggy Instamart</li>
            <li>Swiggy Genie</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Legal</h3>
          <ul>
            <li>Terms & Conditions</li>
            <li>Cookie Policy</li>
            <li>Privacy Policy</li>
          </ul>
          <h3>Contact us</h3>
          <ul>
            <li>Help & Support</li>
            <li>Partner with us</li>
            <li>Ride with us</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>We deliver to:</h3>
          <ul>
            <li>Bangalore</li>
            <li>Gurgaon</li>
            <li>Hyderabad</li>
            <li>Delhi</li>
            <li>Mumbai</li>
            <li>Pune</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
