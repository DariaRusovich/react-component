import "./Accordion.css";

export default function Accordion({ children, title }) {
  return (
    <div className="accordion-item">
      <div className="accordion-heading">
        <h2 className="accordion-header">{title}</h2>
        <span>|||</span>
      </div>
      <div className="accordion-body">
        <p>{children}</p>
      </div>
    </div>
  );
}
