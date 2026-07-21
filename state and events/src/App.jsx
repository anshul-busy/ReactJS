import { useState } from 'react'
import Counter from './components/Counter.jsx'
import Input_preview from './components/Input_preview.jsx'
import Array_traversing from './components/Array_traversing.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Counter />
      <br/>
      <Input_preview />
      <br/>
      <Array_traversing />
    </>
  )
}

export default App
