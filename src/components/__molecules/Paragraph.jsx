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
      <h1 className="heading">FAQ</h1>

      <div>
        <ul>
          {data.map((product, key) => {
            return (
              <Paragraphs
                key={key}
                answer={product.title}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
}
export default Paragraph;
