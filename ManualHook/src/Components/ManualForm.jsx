import React from 'react'
import { useState } from 'react'
const ROLE= ["frontend", "backend", "fullstack"]

const ManualForm = () => {
  const [values, setValues] = useState({
    name:"",
    emial:"",
    role:"frontend",
    experience:"",
    cover:""
  })

  const[errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [name, setName] = useState("")

  function set(feild){
    return (e)=>setValues((prev)=>({...prev, [feild]: e.target.value}))
  }
  function validate(v){
    const e = {}
    if(!v.name.trim()){
      e.name="Name is required"
    }
      if(!v.email.trim()){
      e.name="Email is required"
    }
    return e
  }

  function submit(ev){
  e.preventDefault()
  const e = validate(values)
  setErrors(e)
    if(Object.keys(e).length===0){
      setSubmitted(true)
    }
  }

    if(submitted){
      // fetch details here
      return (
        <div>
          <h1>From submitted successfully</h1>
        </div>
      )
    }
  return <div>
    <form onSubmit={submit} noValidate> 
    <label>
      Full Name
      <input values = { values.name} onChange={set("name")}/>
      {errors.name && <p>{errors.name}</p>}
     </label>

       <label>
     Email
      <input values = {values.email} onChange={set("email")}/>
      {errors.email && <p>{errors.email}</p>}
     </label>
    <button type="submit">Submit</button>
    </form>
  </div>
  
}

export default ManualForm;