import { useEffect } from "react";
import "../__molecules/Sections.css";
import { FetchData } from "../__atoms/api";
import { useState } from "react";
import Paragraphs from "../__atoms/paragraphs";

function Paragraph() {
  const [data, setData] = useState([]);

  useEffect(() => {
    FetchData(setData);
  }, []);

  return (
    <>
      <div className="paragraph_cont">
        <div className="heading_box">
          <h1 className="heading">FAQ</h1>
        </div>

        <div className="ul_cont">
          <ul className="text_list">
            {data.slice(0, 5).map((product, key) => (
              <Paragraphs
                key={key}
                question={product.author}
                answer={product.quote}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
export default Paragraph;
