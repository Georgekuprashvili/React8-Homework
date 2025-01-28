import "../__molecules/Sections.css";
import photo1 from "../../assets/Group 6.svg";
import photo2 from "../../assets/mention_isometric 2.svg";
import photo3 from "../../assets/Group 4 (1).svg";
function Images() {
  return (
    <>
      <div className="image_box">
        <img className="photo1" src={photo2} />
        <img className="photo2" src={photo1} />
        <img className="photo3" src={photo3} />
      </div>
    </>
  );
}
export default Images;
