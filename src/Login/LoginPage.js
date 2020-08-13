import React from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import SideNav from "../SideNav/SideNav";
import axios from "axios";
import { useLocation } from "react-router-dom";
import AdminDashboard from "../Admin/AdminDashboard";
import Cookies from 'js-cookie'
import MatchSelection from "../Scorer/MatchSelection";
import PageNotFound from "../PageNotFound"

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      accessToken: "",
      user_name: "",
      user_role: ""
    };
    {
      /*this.userlogin = this.userlogin.bind(this);
            this.handleLoginFailure = this.handleLoginFailure.bind(this);
            this.logout = this.logout.bind(this);
            this.handleLogoutFailure = this.handleLogoutFailure.bind(this); */
    }
  }

  /*  logout(res) {
      this.setState(state => ({
        isLoggedIn: false,
        accessToken: ''
      }));
    } 
     */

  userlogin = (res) => {
    const accessToken = res.tokenId;
    var axios = require("axios");

    var config = {
      method: "post",
      url: "http://localhost:8080/cricket-tournament/auth",
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    };
    axios(config)
      .then((response) => {
        this.setState((state) => ({
          isLoggedIn: true,
          user_name: response.data.name,
          user_role: response.data.role
        }));
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });


    /* const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6Ijc0NGY2MGU5ZmI1MTVhMmEwMWMxMWViZWIyMjg3MTI4NjA1NDA3MTEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNDAyNzQ0OTUwNjY0LWNlZmVrYXBlN3Q1bTcxZDlvazMzZnVuMXBnNWhnZGI3LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNDAyNzQ0OTUwNjY0LWNlZmVrYXBlN3Q1bTcxZDlvazMzZnVuMXBnNWhnZGI3LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTE1Njg2Njg3OTE2MDkwMjEwMzM4IiwiZW1haWwiOiJhanVzdHRvdGVzdGluZzA5OEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6Im9WRWVsR3pfUlB6Zm5ORnpTNUx5UlEiLCJuYW1lIjoiYWRtaW4gdGVzdGluZyIsInBpY3R1cmUiOiJodHRwczovL2xoNi5nb29nbGV1c2VyY29udGVudC5jb20vLUJvanpSTXlJdTB3L0FBQUFBQUFBQUFJL0FBQUFBQUFBQUFBL0FNWnV1Y21DTVB6QlB6c2NNWWp1c2JUMTd4dHNDQ1hMQ3cvczk2LWMvcGhvdG8uanBnIiwiZ2l2ZW5fbmFtZSI6ImFkbWluIiwiZmFtaWx5X25hbWUiOiJ0ZXN0aW5nIiwibG9jYWxlIjoiZW4iLCJpYXQiOjE1OTczMDk2NTksImV4cCI6MTU5NzMxMzI1OSwianRpIjoiN2YwNzQxYTM0MGUxZDM2ZWJlMjJlMGM5N2ViNjRmNTY2YjgyYTJlZCJ9.NIsZUVRKKNqz6xGoShiCiUT1TY8QajhZ6DvOeYDRJpYMuZV_eNErLtmYbnJ-hqvp70mv4JN1UjjW6Xf8npvrkKGrYbZi8PcPWB_wxN9EBRzl5_4-jbuiL3xbfBr2yHqkdz5wNBiuhLna5PPUwTh7Ax7miEgAC6GkJCxIZm5Yn1IVPCrHh9_zYWL_6Yc4q_VnIXyz2eZOtUw-6kWmQLuaEnddHL7WLPfdIq9u7A3WUVzj2JNWRSQGg6XwjmDuDOjhI-9-h7FtcsD2TdGINV10M61-hrC3-vwwvdJt-K9hT5wgFPFZZT_AWNdkn-b8TMGprz-Eqa5W1-pgqnDN3GMNEA'
    }
    if(res.accessToken) {
       this.setState(state => ({
         isLoggedIn: true,
         accessToken: res.accessToken
       }));
       
     }
    let currentUser = res.profileObj.googleId;
    console.log(userdetails) 
     console.log(accessToken)
     axios.post(`http://localhost:8080/cricket-tournament/auth`,{
       headers:headers
     })
     .then((result) => {
       //let responseJson = result;
       console.log(result)
       localStorage.setItem("userData", result)
     }) 
      console.log(userdetails)
      axios.get(`http://localhost:8080/user/${currentUser}`)
      .then(res => {
          const role = res.data;
          
          //console.log(role)
          if(role == 'admin')
          {
            //this.setState({login : true})
          //return ReactDOM.render(<AdminDashboard/>,document.getElementById('root'))
          this.props.history.push("/admin/dashboard")
          

         
          //return this.handleAdminLogin;
        }
          else
            if(role == 'scorer'){
                //return ReactDOM.render(<PreMatch/>,document.getElementById('root'))
                this.props.history.push(`/scorer/MatchSelection`)
            }
      })  */
    }

/*   handleLoginFailure(res) {
    alert("Failed Log In");
  }

  handleLogoutFailure(res) {
    alert("Failed to Log Out");
  } */

  render() {
    if (this.state.isLoggedIn && this.state.user_role === "CABI_APPL_ADMIN") {
      Cookies.set("name", this.state.user_name)
      Cookies.set("role", this.state.user_role)
      return <AdminDashboard user_name={this.state.user_name}/>;
    }
    else if (this.state.isLoggedIn && this.state.user_role === "CABI_APPL_SCORER") {
      Cookies.set("name", this.state.user_name)
      Cookies.set("role", this.state.user_role)
      return <MatchSelection user_name={this.state.user_name} />;
    }
    /* else{
      return <PageNotFound />;
    } */
    return (
      <div className="Login-Component">
        <br />
        <GoogleLogin
          className="google-login-button"
          clientId="402744950664-cefekape7t5m71d9ok33fun1pg5hgdb7.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={this.userlogin}
          onFailure={this.responseGoogle}
          isSignedIn={true}
          cookiePolicy={"single_host_origin"}
        />

        {/* {this.state.accessToken ? <h5>Your Access Token: <br/><br/> { this.state.accessToken }</h5> : null } */}
      </div>
    );
  }
}

export default LoginPage;
