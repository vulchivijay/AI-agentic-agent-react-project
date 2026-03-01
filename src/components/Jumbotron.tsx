import React from 'react';

const Jumbotron: React.FC = () => (
  <div className="p-5 mb-4 bg-light rounded-3">
    <div className="container-fluid py-5">
      <h1 className="display-5 fw-bold">Bootstrap Demo Jumbotron</h1>
      <p className="col-md-8 fs-4">Using a jumbotron to showcase key content or information.</p>
      <button className="btn btn-primary btn-lg" type="button">Example button</button>
    </div>
  </div>
);

export default Jumbotron;
