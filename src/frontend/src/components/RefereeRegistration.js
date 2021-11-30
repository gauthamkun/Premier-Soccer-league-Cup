import React  from 'react';
import axios from 'axios';


class RefereeRegistration extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
          name:'',
          Id:'',
          RefereeId:''
        
      };
      
      this.handleChange = this.handleChange.bind(this);
      //this.routeChange = this.routeChange.bind(this);
    }
  
   
    handleChange = (e) =>{
        const {name,value} = e.target
        this.setState({[name]:value})
    }

   /* submitRegister(e){
      e.preventDefault();
      //history.push('/Registration');
      window.location.reload();
    }*/
  
    submitLogin(e) {
      e.preventDefault();

        const user = {name: this.state.name,
                    Id: this.state.Id,
                    RefereeId: this.state.RefereeId
                   } 
            
      

        axios({
          method: "post",
          url: "http://localhost:8080/v1//RefereeRegistration",
          data: user,
          headers: { "Content-Type": "application/json" },
        })
          .then((response)=> {
               if(response.data === "Referee registered" ){
                this.routeChange();
                this.setState({
                  message : 'Referee registered',
                })
              } else if(response.data === "Referee logged in"){
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
          <div className="login-card__controls"
          style={{ backgroundImage: "url(images/61449351.jpeg)",
          backgroundRepeat: 'no-repeat',
          width:'700px',
          height:'600px',
          opacity:0.7
          }}>
            
            <div className="login-card__control">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                className="login-input"
                placeholder="name"
                value = {this.state.name}
                onChange = {this.handleChange} />
            </div>
  
            <div className="login-card__control">
              <label htmlFor="RefereeId">Registration Id</label>
              <input
                type="number"
                name="RefereeId"
                className="login-input"
                placeholder="RefereeId"
                value = {this.state.RefereeId}
                onChange = {this.handleChange}
                />
            </div>

            <button
              type="button"
              className="login-btn"
              onClick={this.submitLogin
              .bind(this)}>Register</button>
          </div>
          
        </div>
      );
    }
  
  }

  export default RefereeRegistration;