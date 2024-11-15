import "./Hero.css";
import darkArrow from "../../assets/dark-arrow.png";
const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>We Ensure better education for a better world</h1>
        <p>
          Follow your passion and start the journey to fulfill your greatest
          ambitions. Graduate with deep knowledge, global perspective and
          career-ready, real-world skills. Make your own history. Study with us
          in 2024.
        </p>
        <button className="btn">
          Explore more <img src={darkArrow} alt="darkArrow" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
