import { useState } from 'react';
import Button from './components/Button';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container mt-4">
        <h1>Vite + React + Bootstrap</h1>
        <div className="mb-3">
          <Button label={`Count is ${count}`} onClick={() => setCount(count + 1)} variant="primary" />
        </div>
      </div>
    </>
  );
}

export default App
