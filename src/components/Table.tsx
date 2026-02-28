import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface TableProps {
  children: React.ReactNode;
  striped?: boolean;
  bordered?: boolean;
  hover?: boolean;
}

const Table: React.FC<TableProps> = ({ children, striped = false, bordered = false, hover = false }) => {
  let classes = 'table';
  if (striped) classes += ' table-striped';
  if (bordered) classes += ' table-bordered';
  if (hover) classes += ' table-hover';
  return <table className={classes}>{children}</table>;
};

export default Table;
