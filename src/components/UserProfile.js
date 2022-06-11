import React from 'react'
import "./userprofile.css"

const UserProfile = ({name,location,age,img,gender,email,cell}) => {
  return (
      <div className='userprofile'>
          <h1>{name}</h1>
      <div className="userimage"><img src={img} alt="" /></div>
          <div className="userinfo">
              <div className="email info"><strong>Email-id : </strong><p> {email}</p></div>
              <div className="cell info"><strong>Ph-no :  </strong><p>{cell}</p></div>
              <div className="Country info"><strong>Country :</strong><p>{location}</p></div>
              <div className="age info"><strong>Age :</strong><p>{age}</p></div>
              <div className="gender info"><strong>Gender :</strong><p>{gender}</p></div>



      </div>
    </div>
  )
}

export default UserProfile
