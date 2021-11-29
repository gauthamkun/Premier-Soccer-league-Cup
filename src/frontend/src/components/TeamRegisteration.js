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
          message:''
      };
      
      this.handleDropdownChange2 = this.handleDropdownChange2.bind(this);
      this.handleDropdownChange1 = this.handleDropdownChange1.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.routeChange = this.routeChange.bind(this);
    }
  
   
    routeChange = (e) =>{
        //history.push('/admin');
        window.location.reload();
        
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
                    age: this.state.age
      
                   } 
            
                   e.preventDefault();
  this.setState({ coachname: '' });
  this.setState({ teamname: '' });
  this.setState({ clubname: '' });
  this.setState({age: " "});
  this.setState({ email: '' });
  this.setState({message:'Successfully Registered'})
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
            TeamRegistration
          </div>
          <div className="login-card__controls">
            
           
            <div className="login-card__control">
                <label>Age</label>
                <select id="dropdown" onChange={this.handleDropdownChange1}>
                <option value="Select Age">Select Age</option>
                <option value="6">Under 6</option>
                <option value="8">6-8</option>
                <option value="10">8-10</option>
                <option value="14">10-14</option>
                <option value="18">14-18</option> 
                </select>
            </div>
            <div className="login-card__control">
                <label>Division</label>
                <select id="dropdown" value={this.state.division} onChange={this.handleDropdownChange2}>
                <option value="Select Division">Select Division</option>
                <option value="Red">Red - Top</option>
                <option value="Blue">Blue - Middle</option>
                <option value="Black">Black - Low</option>
                </select>
            </div>
  
            <div className="login-card__control">
              <label htmlFor="email">email</label>
              <input
                type="text"
                name="email"
                className="login-input"
                placeholder="email"
                value = {this.state.email}
                onChange = {this.handleChange} />
            </div>
  
            <div className="login-card__control">
              <label htmlFor="coachname">coachname</label>
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
              <label htmlFor="clubname">clubname</label>
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
              <label htmlFor="teamname">teamname</label>
              <input
                type="text"
                name="teamname"
                className="login-input"
                placeholder="teamname"
                value = {this.state.teamname}
                onChange = {this.handleChange}
                />
            </div>
  
            <button
              type="button"
              className="login-btn"
              onClick={this
              .submitLogin
<<<<<<< Updated upstream
              .bind(this)}>Register</button>
=======
              .bind(this)
              }>Login</button>
>>>>>>> Stashed changes
          </div>
          <div style={{color: "red"}}>
            <p>{this.state.message}</p>
          </div>
        </div>
      );
    }
  
  }

  export default LoginBox;