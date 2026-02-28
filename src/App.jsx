import { useState } from 'react'
import AgenticAgentUI from './components/AgenticAgentUI';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AgenticAgentUI />
      {/* ...existing code... */}
    </>
  )
}

export default App
