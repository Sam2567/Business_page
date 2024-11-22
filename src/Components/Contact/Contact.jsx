import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";
import React, { useEffect, useState } from "react";
const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Submit an enquiry <img src={msg_icon} alt="msg_icon" />
        </h3>
        <p>
          The North Terrace campus is the University of Adelaide's largest and
          is located on North Terrace between Kintore Avenue and Frome Road.
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="" />
            admissions.online@adelaide.edu.au
          </li>
          <li>
            <img src={phone_icon} alt="" />
            8313 4455
          </li>
          <li>
            <img src={location_icon} alt="" />
            The University of Adelaide <br />
            SA 5005 AUSTRALIA
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onsubmit}>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            required
          />
          <label>Leave your message here</label>
          <textarea name="message" id="" cols="30" rows="10"></textarea>
          <button type="submit" className="btn dark-btn">
            Submit Now <img src={white_arrow} alt="" />
          </button>
          <span>{result}</span>
        </form>
      </div>
    </div>
  );
};

export default Contact;
