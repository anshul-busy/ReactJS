import React from 'react'
import "./Style.css"

export const CardTemplate = ({ name, email, phone }) => {
  return (
    <div className="p-outer-box">
      <div className="Outer-Box">
        <h3>{name || 'Your Name'}</h3>
        <p>{email || 'your@email.com'}</p>
        <p>{phone || 'Phone Number'}</p>
      </div>
    </div>
  )
}
