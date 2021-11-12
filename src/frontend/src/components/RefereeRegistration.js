import React  from 'react';
import axios from 'axios';
import './LoginBox.css';
import history from './history';

class RefereeRegistration extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
          name:'',
          Id:''
        
      };
      
      this.handleChange = this.handleChange.bind(this);
      this.routeChange = this.routeChange.bind(this);
    }
  
   
    handleChange = (e) =>{
        const {name,value} = e.target
        this.setState({[name]:value})
    }

    submitRegister(e){
      e.preventDefault();
      history.push('/Registration');
      window.location.reload();
    }
  
    submitLogin(e) {
      e.preventDefault();

        const user = {name: this.state.name,
                    Id: this.state.Id,
                   } 
            
        this.routeChange();

        axios({
          method: "post",
          url: "http://localhost:8080/v1/login",
          data: user,
          headers: { "Content-Type": "application/json" },
        })
          .then((response)=> {
               if(response.data === "User registered" ){
                this.routeChange();
                this.setState({
                  message : 'User registered',
                })
              } else if(response.data === "User logged in"){
                this.routeChange();
                // alert(response.data)
              }
            
            
          })
          .catch(function (response) {
            //handle error
            // alert(response.data )
          });
        

    }
  
    render() {
      return (
        <div className="login-card">
          <div className="login-card__header">
            Referee Registration
          </div>
          <div className="login-card__controls">
            
            <div className="login-card__control">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                className="login-input"
                placeholder="Name"
                value = {this.state.name}
                onChange = {this.handleChange} />
            </div>
  
            <div className="login-card__control">
              <label htmlFor="Id">Registration Id</label>
              <input
                type="number"
                name="Id"
                className="login-input"
                placeholder="Registration Id"
                value = {this.state.Id}
                onChange = {this.handleChange}
                />
            </div>

            <button
              type="button"
              className="login-btn"
              onClick={this.submitRegister
              .bind(this)}>Register</button>
          </div>
          <div style={{color: "red"}}>
            {this.state.message}
          </div>
        </div>
      );
    }
  
  }

  export default RefereeRegistration;