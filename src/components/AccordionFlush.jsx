import "./AccordionFlush.css";

export default function AccordionFlush({ children, title, active, setActive }) {
  return (
    <div className="accordion-item">
      <div onClick={() => setActive(title)} className="accordion-heading">
        <h2 className="accordion-header">{title}</h2>
        <span className='accordion-icon'>
            {(active === title ? '▲' : '▼')}
        </span>
      </div>
      <div className={(active === title ? 'show' : '') + ' accordion-body'}>
        <p>{children}</p>
      </div>
    </div>
  );
}

