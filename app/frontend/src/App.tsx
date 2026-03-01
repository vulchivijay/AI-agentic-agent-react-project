import { useState } from 'react';
import Navbar from './components/Navbar';
import Button from './components/Button';
import Card from './components/Card';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h1>Vite + React + Bootstrap</h1>
        <div className="mb-3">
          <Button label={`Count is ${count}`} onClick={() => setCount(count + 1)} variant="primary" />
        </div>
        <Card
          title="Bootstrap Card"
          text="This is a card component using Bootstrap styling."
          imageUrl="https://via.placeholder.com/150"
        />
      </div>
    </>
  );
}

export default App
