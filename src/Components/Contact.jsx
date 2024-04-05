import { SocialIcon } from 'react-social-icons'
import React from "react";
import  { useState } from "react";


const currYear = new Date().getFullYear();

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can perform further actions with the form data here, such as sending it to a backend server
    console.log("Submitted Form:", { name, email, message });
    // Reset form fields after submission
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>



    {/* <h2 className="contact-heading">Contact Us</h2> */}
    <div className="contact">
     
      <div className="left-colmn">
        <div className="contact-location">
          <li className="about-loc">location</li>
          <li className="about-add">Akurdi, Pune, Maharashtra, India - 411035</li>
        </div>
        <li className="about-follow">follow us</li>
        <div className="contact-follow">
        <SocialIcon url="https://twitter.com/" /> 
        <SocialIcon url="https://instagram.com" />
        <SocialIcon url="https://www.linkedin.com/" />
        
        </div>
        <p>Copyright &copy; {currYear} Privacy policy</p>
      </div>
      <div className="right-colmn">
        <h1> Contact Form</h1>
        <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
      
        <input
          type="text"
          placeholder='Enter your name'
          id="name"
          
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <input
          placeholder=' Enter your Email'
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <textarea
          placeholder='Enter your message'
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
      </div>
    </div>
    </>
  );
};
export default Contact;
