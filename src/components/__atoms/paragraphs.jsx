import arrowimage from "../../assets/Path 2 (3).svg";
import "../__atoms/paragraphs.css";
import { useState } from "react";

function Paragraphs({ question, answer }) {
  const [showText, setShowText] = useState(false);
  const [rotate, setRotate] = useState(false);

  function displaytext() {
    setShowText(!showText);
    setRotate(!rotate);
  }

  return (
    <>
      <div onClick={displaytext} className="text_image_cont">
        <h1 className="text1">{question}</h1>
        <button  className="button">
          <img src={arrowimage} className={rotate ? "rotate" : ""} />
        </button>
      </div>
      {showText && (
        <div className="p_box">
          <p className="text2">{answer}</p>
        </div>
      )}
      <hr />
    </>
  );
}
export default Paragraphs;
