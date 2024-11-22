import "./Campus.css";
import campus_photo_1 from "../../assets/gallery-1.png";
import campus_photo_2 from "../../assets/gallery-2.png";
import campus_photo_3 from "../../assets/gallery-3.png";
import campus_photo_4 from "../../assets/gallery-4.png";
import white_arrow from "../../assets/white-arrow.png";
const Campus = () => {
  const photos = [
    campus_photo_1,
    campus_photo_2,
    campus_photo_3,
    campus_photo_4,
  ];
  return (
    <div className="campus" id="capmus">
      <div className="gallery">
        {photos.map((photo, index) => (
          <img key={index} src={photo} alt={`Campus photo ${index + 1}`} />
        ))}
      </div>
      <button className="btn dark-btn">
        Find out more
        <img src={white_arrow} alt="white_arrow" />
      </button>
    </div>
  );
};

export default Campus;
