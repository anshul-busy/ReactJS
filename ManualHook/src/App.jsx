import { useState } from 'react'
import './App.css'
import ManualForm from './Components/ManualForm'
import HookForm from './Components/HookForm'

function App() {
  const [tab, setTab] = useState(false)

  return (
   <>
   <div className='shell'>
    <h1>Getting Started with form</h1>
    <br />
   </div>
   <div className="tab">
    <button onClick={() => setTab("manual")}>Manual Form</button>
      <button onClick={() => setTab("hook")}>Hook Form</button>

   </div>
    {tab === "manual" ? <ManualForm /> : <HookForm />}   
   
      </>
  )
}

export default App
