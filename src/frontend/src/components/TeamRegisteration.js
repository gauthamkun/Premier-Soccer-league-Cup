import React  from 'react';
import axios from 'axios';


class TeamRegistration extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
          email:'',
          TeamName:'',
          Division :'',
          AgeGroup :'',
          message:''
      };
      this.handleDropdownChange = this.handleDropdownChange.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.routeChange = this.routeChange.bind(this);
    }
  
   
    routeChange = (e) =>{
        //history.push('/admin');
        window.location.reload();
        
    }
    handleDropdownChange=(e) =>{
      this.setState({ role: e.target.value });
    }

    handleChange = (e) =>{
        const {name,value} = e.target
        this.setState({[name]:value})
    }
  
    submitLogin(e) {
      e.preventDefault();

        const user = {email: this.state.email,
                    TeamName: this.state.TeamName,
                    AgeGroup:this.state.AgeGroup,
                    Division : this.state.Division} 
            

        axios({
          method: "post",
          url: "http://localhost:8080/api/savelogin",
          data: user,
          headers: { "Content-Type": "application/json" },
        })
          .then((response)=> {
              if(response.data === "User is already present" && !(this.state.role ===  'Tournament Manager')){
                this.setState({
                  message : 'Please select appropriate role',
                })
              }else if(response.data === "User registered" ){
                this.setState({
                  message : 'Please select appropriate role',
                })
              } else if(response.data === "User is already present" && (this.state.role ===  'Tournament Manager')){
                this.routeChange();
              }
            
            
          })
          .catch(function (response) {
            //handle error
          });
        

    }
  
    render() {
      return (
        <div className="login-card">
          <div className="login-card__header">
           <h2>Team Registration</h2>
          </div>
          <div className="login-card__controls">
            
            <div className="login-card__control">
                <label>Divsion</label>
                <select id="dropdown" onChange={this.handleDropdownChange}>
                <option value="Division">Select Divsion</option>
                <option value="Red">Red - Divsion 1</option>
                <option value="Black">Black - Divison 2</option>
                <option value="Blue">Blue - Divsion 3</option>
                
                </select>
            </div>

            <div className="login-card__control">
                <label>Age-Group</label>
                <select id="dropdown" onChange={this.handleDropdownChange}>
                <option value="Age-Group">Select Group</option>
                <option value="6">Under 6</option>
                <option value="8">6 - 8</option>
                <option value="10">8 -10</option>
                <option value="14">10 - 14 </option>
                <option value="16">14 -16 </option>
                <option value="18">16 -18</option>
                
                </select>
            </div>
  
            <div className="login-card__control">
              <label htmlFor="TeamName">TeamName</label>
              <input
                type="text"
                name="TeamName"
                className="login-input"
                placeholder="TeamName"
                value = {this.state.TeamName}
                onChange = {this.handleChange} />
            </div>
  
            <div className="login-card__control">
              <label htmlFor="email">email</label>
              <input
                type="text"
                name="email"
                className="login-input"
                placeholder="email"
                value = {this.state.email}
                onChange = {this.handleChange}
                />
            </div>
  
            <button
              type="button"
              className="login-btn"
              onClick={this
              .submitLogin
              .bind(this)}>Register</button>
          </div>
          <div style={{color: "red"}}>
            {this.state.message}
          </div>
        </div>
      );
    }
  
  }

  export default TeamRegistration;