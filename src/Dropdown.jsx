import { useState } from "react";
import "./Dropdown.css";


export default function Dropdown({ data, children }) {
    const [open, setOpen] = useState(false)
  return (
    <div className="dropdown">
        <div>
      <button onClick={() => setOpen(prev => !prev)} className="dropdown-btn">{children}</button>
     {open && data && data.length > 0 && (
        <ul className="dropdown-list">
          {data.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )} 
      </div>
    </div>
  );
}
