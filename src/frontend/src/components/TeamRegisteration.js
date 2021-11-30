import React  from 'react';
import axios from 'axios';

class LoginBox extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
          email:'',
          coachname:'',
          teamname:'',
          clubname:'',
          age :'',
          division:'',
          message:'',
          gender:''
      };
      this.onValueChange = this.onValueChange.bind(this);
      this.handleDropdownChange2 = this.handleDropdownChange2.bind(this);
      this.handleDropdownChange1 = this.handleDropdownChange1.bind(this);
      this.handleChange = this.handleChange.bind(this);
      
    }
  
    onValueChange(event) {
      this.setState({
        gender: event.target.value
      });
    }
     handleDropdownChange1=(e) =>{
      this.setState({ age: e.target.value });
    }
    handleDropdownChange2=(e) =>{
      this.setState({ division: e.target.value });
    }
   
  handleChange = (e) =>{
    const {name,value} = e.target
    this.setState({[name]:value})
}




  
    submitLogin(e) {
      e.preventDefault();
       
        const user = {email: this.state.email,
                    coachname: this.state.coachname,
                    teamname: this.state.teamname,
                    clubname: this.state.clubname,
                    division: this.state.division,
                    age: this.state.age,
                    gender :this.state.gender
      
                   } 
            
                   e.preventDefault();
  this.setState({ coachname: '' });
  this.setState({ teamname: '' });
  this.setState({ clubname: '' });
  this.setState({age: " "});
  this.setState({ email: '' });
  console.log(this.state.gender)
        axios({
          method: "post",
          url: "http://localhost:8080/v1/TeamRegistration",
          data: user,
          headers: { "Content-Type": "application/json" },
        })
          .then((response)=> {
              if(response.data === "No"){
                this.setState({
                  message : 'User already registered',
                })
              }else if(response.data === "Yes" ){
                this.setState({
                  message : 'Successfully registered',
                })
              } 
            })
          .catch(function (response) {
            //handle error
          });
        

    }
  
  
    render() {
      var current = new Date();
      var expiry = new Date("December 01, 2021 17:39:00")
      return (
        <div>
        {
        current.getTime() < expiry.getTime()?<div>
        <div className="login-card">
          <div className="login-card__header">
            TeamRegistration
          </div>
          <div className="login-card__controls">
            
           
            <div className="loginsss">
                <label><b>Age</b><br></br></label>
                
                <select id="dropdown" onChange={this.handleDropdownChange1}>
                <option value="Select Age">Select Age</option>
                <option value="6">Under 6</option>
                <option value="8">6-8</option>
                <option value="10">8-10</option>
                <option value="14">10-14</option>
                <option value="18">14-18</option> 
                </select>
            </div>
            <div className="loginsss">
                <label><b>Division</b><br></br></label>
                <select id="dropdown" value={this.state.division} onChange={this.handleDropdownChange2}>
                <option value="Select Division">Select Division</option>
                <option value="Red">Red - Top</option>
                <option value="Blue">Blue - Middle</option>
                <option value="Black">Black - Low</option>
                </select>
            </div>
  
            <div className="login-card__control">
              <label htmlFor="email"><b>Email</b></label>
              <input
                type="text"
                name="email"
                className="login-input"
                placeholder="email"
                value = {this.state.email}
                onChange = {this.handleChange} />
            </div>
  
            <div className="login-card__control">
              <label htmlFor="coachname"><b>Coach Name</b></label>
              <input
                type="text"
                name="coachname"
                className="login-input"
                placeholder="Coachname"
                value = {this.state.coachname}
                onChange = {this.handleChange}
                />
            </div>
            <div className="login-card__control">
              <label htmlFor="clubname"><b>Club Name</b></label>
              <input
                type="text"
                name="clubname"
                className="login-input"
                placeholder="clubname"
                value = {this.state.clubname}
                onChange = {this.handleChange}
                />
            </div>
            <div className="login-card__control">
              <label htmlFor="teamname"><b>Team Name</b></label>
              <input
                type="text"
                name="teamname"
                className="login-input"
                placeholder="teamname"
                value = {this.state.teamname}
                onChange = {this.handleChange}
                />
            </div>
            <div className="radio">
          <label>
            <input
              type="radio"
              value="Male"
              checked={this.state.gender === "Male"}
              onChange={this.onValueChange}
            />
            Male
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="Female"
              checked={this.state.gender === "Female"}
              onChange={this.onValueChange}
            />
            Female
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="Other"
              checked={this.state.gender === "Other"}
              onChange={this.onValueChange}
            />
            Other
          </label>
        </div>
          <button
              type="button"
              className="login-btn"
              onClick={this
              .submitLogin
              .bind(this)}>Register</button>
          </div>
          <div style={{color: "red"}}>
            <p>{this.state.message}</p>
          </div>
        </div>
   </div>:<p>Application process in not available</p> }
    </div>
      );
    }
  
  }

  export default LoginBox;