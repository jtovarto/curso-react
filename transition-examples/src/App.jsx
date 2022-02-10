import { useState } from 'react'
import Navbar from './components/Navbar'
import Transition01 from './components/Transition01';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <header className="p-4 border-bottom">
        <Navbar />
      </header>

      <div class="mt-4">
        <Transition01/>
      </div>
    </div>
  );
}

export default App
