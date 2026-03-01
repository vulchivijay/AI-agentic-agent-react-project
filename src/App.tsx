import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from './components/Alert';
import Badge from './components/Badge';
import Button from './components/Button';
import Card from './components/Card';
import Navbar from './components/Navbar';
import Spinner from './components/Spinner';
import ProgressBar from './components/ProgressBar';
import Accordion from './components/Accordion';
import Breadcrumb from './components/Breadcrumb';
import Dropdown from './components/Dropdown';
import ListGroup from './components/ListGroup';
import Modal from './components/Modal';
import Pagination from './components/Pagination';
import Table from './components/Table';
import Toast from './components/Toast';
import ButtonGroup from './components/ButtonGroup';
import CloseButton from './components/CloseButton';
import Collapse from './components/Collapse';
import Nav from './components/Nav';
import Offcanvas from './components/Offcanvas';
import PaginationAdvanced from './components/PaginationAdvanced';
import Popover from './components/Popover';
import ProgressBarMultiple from './components/ProgressBarMultiple';
import Tooltip from './components/Tooltip';
import Form from './components/Form';
import InputGroup from './components/InputGroup';
import Image from './components/Image';
import Jumbotron from './components/Jumbotron';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <Jumbotron />
        <h1 className="mb-4">Bootstrap Components Demo</h1>
        <div className="mb-3"><Alert /></div>
        <div className="mb-3"><Badge /></div>
        <div className="mb-3"><Button /></div>
        <div className="mb-3"><ButtonGroup /></div>
        <div className="mb-3"><Card /></div>
        <div className="mb-3"><CloseButton /></div>
        <div className="mb-3"><Collapse /></div>
        <div className="mb-3"><Nav /></div>
        <div className="mb-3"><Navbar /></div>
        <div className="mb-3"><Offcanvas /></div>
        <div className="mb-3"><Spinner /></div>
        <div className="mb-3"><ProgressBar /></div>
        <div className="mb-3"><ProgressBarMultiple /></div>
        <div className="mb-3"><Accordion /></div>
        <div className="mb-3"><Breadcrumb /></div>
        <div className="mb-3"><Dropdown /></div>
        <div className="mb-3"><ListGroup /></div>
        <div className="mb-3"><Modal /></div>
        <div className="mb-3"><Pagination /></div>
        <div className="mb-3"><PaginationAdvanced /></div>
        <div className="mb-3"><Table /></div>
        <div className="mb-3"><Toast /></div>
        <div className="mb-3"><Popover /></div>
        <div className="mb-3"><Tooltip /></div>
        <div className="mb-3"><Form /></div>
        <div className="mb-3"><InputGroup /></div>
        <div className="mb-3"><Image /></div>
        <div className="card mt-4">
          <button onClick={() => setCount((count) => count + 1)} className="btn btn-info">
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
      </div>
    </>
  );
}

export default App
