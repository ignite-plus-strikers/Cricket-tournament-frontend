import React from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import {Redirect, Route , Switch} from 'react-router-dom'

import axios from "axios";
import { useLocation } from "react-router-dom";
import AdminDashboard from "../Admin/AdminDashboard";
import Cookies from 'js-cookie'
import MatchSelection from "../Scorer/MatchSelection";
import PageNotFound from "../PageNotFound"
import {Card, CardContent, TextareaAutosize} from "@material-ui/core"
import { Typography, Divider,Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {Alert,AlertTitle} from "@material-ui/lab"
import {Snackbar} from "@material-ui/core"
import AppBar from '@material-ui/core/AppBar';
import appbar from '../Admin/cards_images/appbar.png';
import AdminList from "../SiteAdmin/component/AdminList";
import Home from "../SiteAdmin/component/Home";

//import Header from "../Scorer/Header"

const styles = {
  card: {
    
    width : 400
  },
  media: {
        objectFit: 'cover',
  },
};


class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      accessToken: "",
      user_name: "",
      user_role: "",
      open1 : false
    };
    this.handleInvalid = this.handleInvalid.bind(this);
  }

  /*  logout(res) {
      this.setState(state => ({
        isLoggedIn: false,
        accessToken: ''
      }));
    } 
     */

     handleInvalid(){
       this.setState({open1 : true})
     }

   

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
        this.handleInvalid();
      }.bind(this));


      


    
    }


 
 

  render() {
    if (this.state.isLoggedIn && this.state.user_role === "CABI_APPL_ADMIN") {
      Cookies.set("name", this.state.user_name )
      Cookies.set("role", this.state.user_role)
      return <AdminDashboard user_name={this.state.user_name}/>;
      //return <Redirect to ="/admin/dashboard" />
    }
    else if (this.state.isLoggedIn && this.state.user_role === "CABI_APPL_SCORER") {
      Cookies.set("name", this.state.user_name)
      Cookies.set("role", this.state.user_role , {expires:0.5})
      //return <MatchSelection user_name={this.state.user_name} />;
      return <Redirect to ="/scorer/MatchSelection" />
    }
    else if (this.state.isLoggedIn && this.state.user_role === "CABI_SITE_ADMIN") {
      Cookies.set("name", this.state.user_name)
      Cookies.set("role", this.state.user_role)
      //return <Home user_name={this.state.user_name} />;
      return <Redirect to = "/siteadmin/home" />
    }
   
    const { classes } = this.props;
    /* else{
      return <PageNotFound />;
    } */
    return (
      <div className="Login-Component">

        <AppBar position="fixed" className={classes.appBar}>  
        <img src={appbar} style={{height:90}}></img>
        </AppBar>  
      <Snackbar open={this.state.open1} autoHideDuration={6000} onClose={() => {}} style={{marginTop : "50%", marginRight : "15%"}}>
      <Alert severity="error">
      <AlertTitle>Oops! Error</AlertTitle>
      Looks like the credentials entered are invalid! 
      </Alert>
      </Snackbar>
        <br />
        <Card className={classes.card} align = "center" style = {{marginLeft : "37%", marginTop : "15%"}}>
        <CardContent align = "center">
        <Typography>Please Login with your assigned Google Account</Typography>
        <Divider/>
        <Typography>{this.state.message}</Typography>
        <div style={{marginRight : 120}}>
        <GoogleLogin
          className="google-login-button"
          clientId="402744950664-cefekape7t5m71d9ok33fun1pg5hgdb7.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={this.userlogin}
          onFailure={this.responseGoogle}
          isSignedIn={true}
          cookiePolicy={"single_host_origin"}
        /></div>
        
        </CardContent>
        </Card>

      
       
        {/* {this.state.accessToken ? <h5>Your Access Token: <br/><br/> { this.state.accessToken }</h5> : null } */}
      </div>
    );
  }
}

LoginPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginPage);