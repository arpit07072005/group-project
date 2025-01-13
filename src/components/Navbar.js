import React from 'react'

export default function Navbar() {
  return (
    <div className="navbar">
      <p>Care<span className="logo">Connect</span></p>
      <ul className="navli">
        <li>Home</li>
        <li>About Us</li>
        <li>Services</li>
        <li>Testimonials</li>
        <li>Contact Us</li>

      </ul>
      <button className="mainbtn">FindCare</button>
      <button className="mainbtn">Caregiver</button>
    </div>
  )
}
