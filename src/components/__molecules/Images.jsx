import "../__molecules/Sections.css";
import photo1 from "../../assets/Group 6.svg";
import photo2 from "../../assets/mention_isometric 2.svg";
function Images() {
  return (
    <>
      <div className="image_box">
        <img className="photo1" src={photo2} />
        <img className="photo2" src={photo1} />
      </div>
    </>
  );
}
export default Images;
