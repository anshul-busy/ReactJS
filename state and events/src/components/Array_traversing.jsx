import React from 'react'
import './Array.css'

const user = [
  { id: 1, name: "Alice", age: 28, role: "Developer", active: true },
  { id: 2, name: "Bob", age: 34, role: "Designer", active: false },
  { id: 3, name: "Charlie", age: 25, role: "Manager", active: true }
]

const Array_traversing = () => {
  return (
<div>
     <h1>Array Traversing</h1>
    {user.map((item) => (
        <div key={item.id}>    
       
        <div className='user-card'>
    <p>{item.name}</p>
      
        <p>{item.age}</p>
      
        <p>{item.role}</p>
        <p>{item.active ? "Active" : "Inactive"}</p>
        </div>
       
        </div>
    ))}
    
   
   
   </div>
  )
}

export default Array_traversing