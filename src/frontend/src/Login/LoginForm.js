import React from "react";
import SubmitForm from './stores/SubmitForm';
import InputField from './stores/InputField';
import UserStore from './stores/UserStore';


class LoginForm extends React.Component() {
  render() {
    return <div className="loginForm">
        async componentDidMount() {
            try(){
                let res = await fetch('/isLoggedIn', {
                    method: 'post',
                    headers:{
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',

                    }
                    let result: await res.json();
                    if(result && result.success){
                        UserStore.loading = false;
                        UserStore.loggedIn = true;
                        UserStore.username = result.username;
                    }
                    else{
                        UserStore.loading = false;
                        UserStore.loggedIn = false;
                    }
            }
            catch(e){
                UserStore.loading = false;
                UserStore.loggedIn = false;
            }
    </div>;
  }
}
export default LoginForm;
