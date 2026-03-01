import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface AccordionItem {
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="accordion" id="accordionExample">
      {items.map((item, idx) => (
        <div className="accordion-item" key={idx}>
          <h2 className="accordion-header" id={`heading${idx}`}>
            <button
              className={`accordion-button${activeIndex === idx ? '' : ' collapsed'}`}
              type="button"
              onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
            >
              {item.title}
            </button>
          </h2>
          <div
            id={`collapse${idx}`}
            className={`accordion-collapse collapse${activeIndex === idx ? ' show' : ''}`}
            aria-labelledby={`heading${idx}`}
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
