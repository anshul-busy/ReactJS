import React, { useState } from 'react'

const Input_preview = () => {

const [text, setText] = useState("");
const [preview, setPreview] = useState("");

function setext(){
  setText(event.target.value)
}

function pre (){
  setPreview(text)
}
 

return (

    <div>
        <input type="text" placeholder='Enter your name'
        
      onChange={setext}/>

      <button onClick={pre}> print text</button>
  <p> preview: {text}</p>
    </div>

  )
}
export default Input_preview