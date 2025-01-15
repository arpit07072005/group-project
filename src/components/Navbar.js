
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
export default function Navbar() {
  const [menuopen,setMenuopen]=useState(false);
const handlemenu=()=>{
  setMenuopen(true);
}
const handlemenuclose=()=>{
  setMenuopen(false);
}
  return (
    <>
    <div className="navbar">
      <p>Care<span className="logo">Connect</span></p>
      <ul className="navli remove">
        <li>Home</li>
        <li>About Us</li>
        <li>Services</li>
        <li>Testimonials</li>
        <li>Contact Us</li>

      </ul>
      <button className="mainbtn">FindCare</button>
      <button className="mainbtn">Caregiver</button>
      <button className="menu"onClick={handlemenu}><MenuIcon/></button>
    </div>
    <div className={`${menuopen?'togglemenu':'menuclose'}`}>
    <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Services</li>
        <li>Testimonials</li>
        <li>Contact Us</li>
      </ul>
      <button className="closemenu"onClick={handlemenuclose}><CloseIcon/></button>
    </div>
    </>
  )
}
