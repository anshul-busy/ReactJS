import React, { useEffect, useState } from 'react';
import axios from "axios";


const Movie = () => {

const [data,setData] = useState({})

const API = "https://www.omdbapi.com/?i=tt3896198&apikey=957d183f"
  // const response = await axios.get(API)
const getMovieData = async () => {
  try {
    const response = await axios.get(API)

  console.log(response.data)
  setData(response.data)
} catch (error) {
console.log("Error", error)  
}
  }
  
useEffect(()=>{
    getMovieData()
},[])

  return (
    <div>
     <ul>
  {Object.entries(data).map(([key, value]) => (
    <li key={key}>
      <b>{key}:</b> {value}
    </li>
  ))}
</ul>
    </div>
  )
}

export default Movie