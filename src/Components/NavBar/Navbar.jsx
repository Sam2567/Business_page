import "./Navbar.css";
import logo from "../../assets/Main_logo.png";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [stickyBar, setStickyBar] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setStickyBar(true) : setStickyBar(false);
    });
  }, []);

  return (
    <nav className={`container ${stickyBar ? "dark-nav" : ""}`}>
      <img src={logo} alt="Logo" className="logo" />
      <ul>
        <li>
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="program" smooth={true} offset={-260} duration={500}>
            Program
          </Link>
        </li>
        <li>
          <Link to="about-us" smooth={true} offset={-150} duration={500}>
            About us
          </Link>
        </li>
        <li>
          <Link to="campus" smooth={true} offset={-260} duration={500}>
            Campus
          </Link>
        </li>
        <li>
          <Link to="testimonials" smooth={true} offset={-260} duration={500}>
            Testimonials
          </Link>
        </li>
        <li>
          <Link
            className="btn"
            to="contact"
            smooth={true}
            offset={-260}
            duration={500}
          >
            Contact us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
