import "./Testimonials.css";
import testimonials from "../../data/testimonials.json";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import { useRef } from "react";

const Testimonials = () => {
  const slider = useRef();
  let transX = 0;
  const slideForward = () => {
    if (transX > -50) {
      transX -= 25;
    }
    slider.current.style.transform = `translateX(${transX}%)`;
  };
  const slideBackward = () => {
    if (transX < 0) {
      transX += 25;
    }
    slider.current.style.transform = `translateX(${transX}%)`;
  };
  return (
    <div className="testimonials" id="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          {testimonials.map((user) => (
            <li key={user.id}>
              <div className="slide">
                <div className="user-info">
                  <img src={user.photo} alt={user.name} />
                  <div>
                    <h3>{user.name}</h3>
                    <span>{user.university}</span>
                  </div>
                  <p>{user.feedback}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
