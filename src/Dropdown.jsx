import "./Dropdown.css";

export default function Dropdown({ data, children }) {
  return (
    <div className="dropdown">
        <div>
      <button className="dropdown-btn">{children}</button>
      {data && data.length > 0 && (
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
