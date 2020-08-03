import React from 'react';
import GoogleLogin from 'react-google-login'
 import ReactDOM from 'react-dom'
// import Admin from './Admin'
//import history from 'history'
//import ReactDOM from 'react-dom'
import AdminDashboard from '../Admin/AdminDashboard'
import PreMatch from '../Scorer/PreMatch'
import axios from 'axios'



class LoginPage extends React.Component {
    constructor(props){
        super(props)
            this.userlogin = this.userlogin.bind(this);
           // this.directPage = this.directPage.bind(this);
    }


   userlogin(res){
     const userdetails  = {
    userId : res.profileObj.googleId,
    userName : res.profileObj.name,
    userEmail : res.profileObj.email
     }
    // let fetchId = res.profileObj.googleId;

     axios.post(`http://localhost:8081/user`,userdetails)
     
     console.log(userdetails)

      
     axios.get(`http://localhost:8081/user/${userdetails.userId}`)
      .then(res => {
          const role = res.data;
          console.log(role)
          if(role === 'admin')
          {return ReactDOM.render(<AdminDashboard/>,document.getElementById('root'))
        // return this.props.history.push('/admin/dashboard')
        }
          else
            if(role === 'scorer'){
                return ReactDOM.render(<PreMatch/>,document.getElementById('root'))
                //this.props.history.push('/scorer/dashboard')
            }
      })
   }


  render(){
  return (
    <div className="App">
     <p>Login</p>
     <GoogleLogin
      clientId = "402744950664-cefekape7t5m71d9ok33fun1pg5hgdb7.apps.googleusercontent.com"
      buttonText = "Login"
      onSuccess = {this.userlogin}
      onFailure = {this.responseGoogle}
      isSignedIn={true}
      cookiePolicy={'single_host_origin'}
      />
    
    </div>
  );
}
}

export default LoginPage;
