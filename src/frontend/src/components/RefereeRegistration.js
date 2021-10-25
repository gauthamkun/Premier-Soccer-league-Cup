import React from "react";


const RefereeRegistration=()=>{
    return (
      <div className="base-container">
        <div className="header" style={{marginLeft:570 ,fontWeight: "bold"}}>Referee Registration</div>
        <div className="content">
          <div className="image">
            <img src="images/61449351.jpeg"/>
          </div>
          <div className="form" >
              <div className="form-group" style={{marginLeft:300 }}>
              <label htmlFor="username">Name</label>
              <input type="text" name="username" placeholder="Enter your name"/>
              </div>
              <div className="form-group" style={{marginLeft:350 }}>
              <label htmlFor="username">Registeration Id</label>
              <input type="text" name="password" placeholder="Enter your  Id"/>
              </div>  
              <button type="button" className="btn" style={{marginLeft:300 }}> 
            Register
          </button>
          </div>
        </div>     
      </div>  
    );
}
    
export default RefereeRegistration;