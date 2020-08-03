import React from 'react';
import GoogleLogin from 'react-google-login'
//  import ReactDOM from 'react-dom'
// // import Admin from './Admin'
// //import history from 'history'
// //import ReactDOM from 'react-dom'
// import AdminDashboard from '../Admin/AdminDashboard'
// import PreMatch from '../Scorer/PreMatch'
import axios from 'axios'
//import PropTypes from "prop-types";



class LoginPage extends React.Component {
    constructor(props){
        super(props)
        this.state={
          login : false
        }
            this.userlogin = this.userlogin.bind(this);
    }

   userlogin(res){
     const userdetails  = {
    userId : res.profileObj.googleId,
    userName : res.profileObj.name,
    userEmail : res.profileObj.email
    }

     //console.log(userdetails)


     axios.post(`http://localhost:8081/user`,userdetails)
     
     console.log(userdetails)

      
     axios.get(`http://localhost:8081/user/${userdetails.userId}`)
      .then(res => {
          const role = res.data;
          console.log(role)
          if(role === 'admin')
          {
            //this.setState({login : true})
          //return ReactDOM.render(<AdminDashboard/>,document.getElementById('root'))
          this.props.history.push(`/admin/dashboard`)
          //return this.handleAdminLogin;
        }
          else
            if(role === 'scorer'){
                //return ReactDOM.render(<PreMatch/>,document.getElementById('root'))
                this.props.history.push(`/scorer/matchSelection`)
            }
      })
   }


  render(){
    // if(this.state.login){
    //   return <AdminDashboard history = {this.props.history}/>
    // }
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

export default LoginPage