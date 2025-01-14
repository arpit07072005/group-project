import React, { useState } from 'react'
import { Link } from 'react-router'

export default function Page1() {
  const[query,setQuery]=useState();
  const handleChange=(e)=>{
       setQuery(e.target.value)
  }
  return (
    <>
    <div className="page1">
        <div className="content">
            <div className="head">
               <p>Connecting <span className="caregivers">Caregivers</span> and those in need</p>
            </div>
            <div className="para">
             <p>At CareConnect, we understand that caregiving is more than just a responsibility—it's a heartfelt commitment to providing comfort, support, and dignity to those in need. Our mission is to connect caregivers, families, and individuals with the resources, services, and guidance they need to navigate the caregiving journey with confidence .</p>
            </div>
        </div>
        <div className="johny">
            <div className="photo">

            </div>
        </div>
    </div>
    <div className="proceedure">
        <div className="pchild">
            <div className="logo1">
               
            </div>
            <h1>Enroll</h1>
            <p>Choose to be a caregiver or a client.</p>

        </div>
        <div className="pchild">
        <div className="logo2">

        </div>
        <h1>Connect</h1>
        <p>Browse Profiles and find the right match.</p>

       </div>
      
        <div className="pchild">
        <div className="logo3">

        </div>
        <h1>Review Care</h1>
         <p>Enjoy personalized assistance tailored
         to your needs.</p>

          </div>

        </div>
        <div className="page2">
          <div className="caregiver">
            <span className="head">Became a Caregiver</span>
            <p>Join our platform and make a difference in someoen's life.</p>
            <ul className="caregiverli">
              <li>Comprehensive Credential Collection</li>
              <li>Professional Background Verification</li>
              <li>Fraud Prevention Measures </li>
            </ul>
          <Link to ="/registration"><button className="app1">Start</button></Link>

          </div>
          <div className="client">
          <span className="head">Find the Right Caregiver</span>
            <p>Browse our curated pool of caregivers to find the perfect match.</p>
            <ul className="caregiverli">
              <li>Customize your Services</li>
              <li>Negotiate Terms</li>
              <li>Flexible Engagements</li>
            </ul>
            <button className="app2">Browse</button>

          </div>
          <div className="services">
          <span className="head">Our Services</span>
          <p>Full-Time Caretaking Assistance</p>
          <p>Round-the-clock, 24/7 care tailored to the clients's needs.</p>
          <span className="heada">Medical and Logistical Assistance</span>
          <p>Transportation to medical facilities and management of paperwork</p>
          </div>
        </div>
        <div className="page3">
          <div className="parent1">
          <div className="child1">
            <h1>Why Choose Us?</h1>
            <p> <span className="heading">Integrity</span>: thorough background checks.</p>
            <p><span className="heading">Lucidity</span>: Open communication.</p>
            <p> <span className="heading">Flexibilty</span>: Customized agreements.</p>
            <p><span className="heading">Expertise</span>: Qualified caregivers.</p>
              
          </div>
          <div className="child2">
          <h1>What Our Users Say</h1>
          <p>“This service changed my life!” - Client A</p>
          <p>“I found the perfect caregiver for my mother.” - Client B</p>
          <p>“Such a great platform! It made finding a caretaker for my kids so easy.” - Client C</p>
           </div>
          </div>
          <div className="feedback">
            <span className="policy">
              <p>Privacy Policy</p>
              <p> Terms of Service</p>
              <p> FAQs</p>
            </span>
            <p><span className="email">Email:</span>support@careconnect.com</p>
            <p><span className="email">Phone:</span>6387034789</p>
            <span className="query">Stay Updated with Our Services</span>
           <span className="inpsub"><input type ="text" className="inp" value={query} placeholder="Enter your Email" onChange={handleChange} /><button className="sub">Subscribe</button></span> 


          </div>

        </div>
       
    </>
  )
}
