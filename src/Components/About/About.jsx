import "./About.css";
import about_image from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = ({ setPlayerState }) => {
  return (
    <div className="about" id="about-us">
      <div className="about-left">
        <img src={about_image} alt="about_image" className="about-img"></img>
        <img
          src={play_icon}
          alt="about_image"
          className="play-icon"
          onClick={() => {
            setPlayerState(true);
          }}
        ></img>
      </div>
      <div className="about-right">
        <h3>About University</h3>
        <h2>Make History</h2>
        <p>
          There are all kinds of ways to make your mark. It could be as big as
          changing the world. As complex as changing minds. Or as fundamental as
          changing yourself. Whatever big things lie before you, we’re all about
          helping you make it happen. So, where will you go?
        </p>
        <p>
          Our researchers’ relentless pursuit of new knowledge underpins our
          every achievement. We’re constantly searching for a better way, a more
          effective solution, and a deeper understanding—to strengthen our
          community and enhance our world.
        </p>
        <p>
          There are many ways you can engage with us and our world-class
          educational and research activities. Collaborate to overcome a
          challenge. Apply our research to spark your innovation. Or give a
          financial gift to open more doors for the next generation.
        </p>
      </div>
    </div>
  );
};

export default About;
