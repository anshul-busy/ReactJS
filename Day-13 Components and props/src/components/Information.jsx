import React from 'react'
import "./info.css"

export const Information = ({ formData, onChange, onSubmit }) => {
  return (
    <>
      <section className="p-outer-box">
        <div className="outer-box">
          <form className="info" onSubmit={onSubmit}>
            <div className="inner-box">
              <p>Enter your name</p>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={onChange}
              />
            </div>

            <div className="inner-box">
              <p>Enter your email</p>
              <input
                type="text"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={onChange}
              />
            </div>

            <div className="inner-box">
              <p>Enter your Phone Number</p>
              <input
                type="text"
                name="phone"
                placeholder="Enter your Phone Number"
                value={formData.phone}
                onChange={onChange}
              />
            </div>

            <div className="inner-box">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}