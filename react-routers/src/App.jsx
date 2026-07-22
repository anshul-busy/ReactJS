import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from "./components/Home" 
import About  from './components/About';
import Contact from './components/Contact';

function App() {
  const [count, setCount] = useState(0)

  return (
      <BrowserRouter>
    <nav>
      <Link to="./components/Home">Home</Link>
       <Link to="./components/About">About</Link>
        <Link to="./components/Contact">Contact</Link>

    </nav>

      <Routes>
        <Route path="/components/Home" element={<Home />} />
        <Route path="/components/Contact" element={<Contact />} />
        <Route path="/components/About" element={<About />} />
      </Routes>

    
      </BrowserRouter>
  )
}

export default App
