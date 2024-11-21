import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
const Contact = () => {
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
        <form>
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
        </form>
      </div>
    </div>
  );
};

export default Contact;
