import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface NavbarProps {
  brand?: string;
  children?: React.ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({ brand, children }) => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#">{brand}</a>
    <div className="collapse navbar-collapse">
      <ul className="navbar-nav mr-auto">
        {children}
      </ul>
    </div>
  </nav>
);

export default Navbar;
