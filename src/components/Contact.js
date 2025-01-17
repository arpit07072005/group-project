import React, { useState } from 'react'

export default function Contact() {
    const[name,setName]=useState("Full Name")
    const[email,setEmail]=useState("Email Address")
    const[message,setMessage]=useState("Enter your Message Here")

    const handlename=(e)=>{
        setName(e.target.value)
    }
    const handleemail=(e)=>{
        setEmail(e.target.value)
    }
    const handlemssg=(e)=>{
        setMessage(e.target.value)
    }
    const handleClick=(e)=>{
        if(e.target.name==="name"){
            setName("");
        }
        else if(e.target.name==="email"){
            setEmail("");
        }
        else if(e.target.name==="message"){
            setMessage("");
        }
    }
  return (
    <div className="page6">
      <h4>CONTACT US</h4>
      <div className="contactimg">
        <div className="contactform">
            <p>If you have any queries, drop them here</p>
            <span className="inputfield">
            <span className="inputfield1">
            <label htmlFor="name">Name</label>
            <input type="text" value={name} name="name" onChange={handlename} onClick={handleClick} />
            </span>
            <span className="inputfield2">
            <label htmlFor="email">Email</label>
            <input type="text" value={email} name="email" onChange={handleemail} onClick={handleClick}/>
            </span>
            </span>
            <label htmlFor="message">Message</label>
            <input type="text" value={message} name="message" onChange={handlemssg} onClick={handleClick} className="mssg"/>
            <span className="checkbox"><input type="checkbox" name="robot" value="robot" placeholder="I'm not a robot"/>I'm not a robot</span>
            <button className="send">Send</button>

        </div>
        <div className="childimg">
        <img src='./contact.png' alt="frame"/>
        </div>
      </div>
    </div>
  )
}
