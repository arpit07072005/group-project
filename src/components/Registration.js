import React from 'react'

export default function Registration() {
  const synonym=["Change","Hope","Caregiver"]
  return (
    <div className="registrationform">
      <div className="careimage">
        <div className="careimagetext">
          <span className="bethe">Be The </span>
            <div className="allthree">
            {synonym.map((element)=>{
              return(
                <span>{element}</span>
              )
            })}
            </div>
          
        </div>
      </div>
      <div className="formimage">
        <form>
          <h1><span>Caregivers</span>  Registration  Form</h1>
        </form>
      </div>
    </div>
  )
}
