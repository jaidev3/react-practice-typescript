import { useState } from "react";

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleClick = (index: number) => {
    setActiveIndex((prev) => {
      return prev === index ? -1 : index;
    });
  };

  return (
    <div>
      <div>
        <div onClick={() => handleClick(0)}>
          HTML <span aria-hidden={true} className="accordion-icon" />
        </div>
        <div className={activeIndex == 0 ? "" : "not-active"}>
          The HyperText Markup Language or HTML is the standard markup language
          for documents designed to be displayed in a web browser.
        </div>
      </div>
      <div>
        <div onClick={() => handleClick(1)}>
          CSS <span aria-hidden={true} className="accordion-icon" />
        </div>
        <div className={activeIndex == 1 ? "" : "not-active"}>
          Cascading Style Sheets is a style sheet language used for describing
          the presentation of a document written in a markup language such as
          HTML or XML.
        </div>
      </div>
      <div>
        <div onClick={() => handleClick(2)}>
          JavaScript <span aria-hidden={true} className="accordion-icon" />
        </div>
        <div className={activeIndex == 2 ? "" : "not-active"}>
          JavaScript, often abbreviated as JS, is a programming language that is
          one of the core technologies of the World Wide Web, alongside HTML and
          CSS.
        </div>
      </div>
    </div>
  );
}
