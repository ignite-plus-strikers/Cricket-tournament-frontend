import React, { Component } from "react";
import GoogleLogin from "react-google-login";
//import { GoogleLogin } from "react-google-button"
import "../../App.css";
import Navbar from "./Navbar";
import {Card, CardContent, TextareaAutosize} from "@material-ui/core"
import {Container} from "@material-ui/core"
import { Typography, Divider,Grid } from "@material-ui/core";
import Header from '../../Scorer/Header'

class Home extends Component {
  responseGoogle = (response) => {
    console.log(response);
    console.log(response.profileObj);
  };

  render() {
    return (
    
      <div style = {{marginTop:80}}>
        <Header />
       <Navbar />
        <br />
        <Container align="center">
      <Card align = "center" style = {{width: '40%' , height : '40%'}}>
        <CardContent align = "center">
        <Typography>
          Click here to create a new Google Account
        </Typography>
        <Divider/>
       
        <GoogleLogin
          className="google-create-account"
          clientId="402744950664-cefekape7t5m71d9ok33fun1pg5hgdb7.apps.googleusercontent.com"
          buttonText="Create Account"
          onSuccess={this.userlogin}
          onFailure={this.responseGoogle}
          isSignedIn={true}
          cookiePolicy={"single_host_origin"}
        /></CardContent></Card></Container>
       
        <h1
          style={{
            marginTop: 100,
            fontWeight: 80,
            textAlign: "center",
            marginBottom: 80,
          }}
        >
          Disabling inhibitions to excel in sports...
        </h1>
        
      </div>
    );
  }
}

export default Home;
