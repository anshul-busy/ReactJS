import { useEffect } from 'react';
import { useState } from 'react'

function App() {
  
  const [post, setPost]= useState([]) // return type is array [variable, function]
  const [status, setStatus] = useState("idle")
  const [seconds, setSeconds] = useState(10);

// useEffect(()=>{
//   const id = setInterval(() => {
//       setSeconds((current)=> Math.max(current-1 , 0))
//   }, 1000);
// console.log(seconds)
// return () =>{
//     clearInterval(id)
//   }
// },[seconds]) // [] -> dependancy array 

const URL = "https://jsonplaceholder.typicode.com/users"

const controller = new AbortController()

useEffect(()=>{
  const controller = new AbortController()
  async function loadPost(){
  setStatus("loading")  
  try {
    const response = await fetch(URL, {signal: controller.signal});

    const data = await response.json()
    setPost(data)
    if(!response.ok){
      throw new ERROR("Invalid URL")
    }
    console.log(data)
    setStatus("Success")  

  } catch (error) {
  console.log(Error )  
  }
  }
  loadPost()

  return ()=>{
    controller.abort()
  }

}, [])

  return (
    <>
    <div>
   
    </div>
    </>
  )
}

export default App
