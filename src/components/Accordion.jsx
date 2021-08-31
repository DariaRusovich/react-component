import { useState } from "react";
import "./Accordion.css";

export default function Accordion({ title, children, btnText }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="accordion-wrap">
     <div className="accordion">
     <div onClick={() => setOpen((prev) => !prev)} className="accordion-head">
        <h2>{title}</h2> <span className="accordion-icon">{open ? "▲" : "▼"} </span>
      </div>
      
        <div className={(open ? 'show' : '') + ' accordion-content'}>
          <p>{children}</p>
          <button className="accordion-btn">{btnText}</button>
        </div>
      
     </div>
    </div>
  );
}
