import "./Accordion.css";

export default function Accordion({ children, title, active, setActive }) {
  return (
    <div className="accordion-item">
      <div onClick={() => setActive(title)} className="accordion-heading">
        <h2 className="accordion-header">{title}</h2>
        <span>
            {(active === title ? 'X' : '|||')}
        </span>
      </div>
      <div className={(active === title ? 'show' : '') + ' accordion-body'}>
        <p>{children}</p>
      </div>
    </div>
  );
}
