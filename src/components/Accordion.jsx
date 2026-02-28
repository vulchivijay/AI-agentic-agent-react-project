import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Accordion = ({ items = [] }) => {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <div className="accordion" id="accordionExample">
      {items.map((item, idx) => (
        <div className="accordion-item" key={idx}>
          <h2 className="accordion-header" id={`heading${idx}`}>
            <button
              className={`accordion-button${openIndex === idx ? '' : ' collapsed'}`}
              type="button"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              {item.header}
            </button>
          </h2>
          <div className={`accordion-collapse collapse${openIndex === idx ? ' show' : ''}`}>
            <div className="accordion-body">{item.body}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
