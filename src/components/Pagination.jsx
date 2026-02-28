import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Pagination = ({ pages = 1, current = 1, onChange }) => (
  <nav>
    <ul className="pagination">
      {[...Array(pages)].map((_, idx) => (
        <li key={idx} className={`page-item${current === idx + 1 ? ' active' : ''}`}>
          <button className="page-link" onClick={() => onChange(idx + 1)}>{idx + 1}</button>
        </li>
      ))}
    </ul>
  </nav>
);

export default Pagination;
