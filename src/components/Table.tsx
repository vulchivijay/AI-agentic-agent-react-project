import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface TableProps {
  headers: string[];
  data: (string | number)[][];
  striped?: boolean;
  bordered?: boolean;
  hover?: boolean;
}

const Table: React.FC<TableProps> = ({ headers, data, striped, bordered, hover }) => {
  const classes = [
    'table',
    striped ? 'table-striped' : '',
    bordered ? 'table-bordered' : '',
    hover ? 'table-hover' : '',
  ].join(' ');

  return (
    <table className={classes}>
      <thead>
        <tr>
          {headers.map((header, idx) => (
            <th key={idx}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rIdx) => (
          <tr key={rIdx}>
            {row.map((cell, cIdx) => (
              <td key={cIdx}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
