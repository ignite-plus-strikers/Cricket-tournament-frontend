import React from 'react';
import { GoogleLogout } from "react-google-login";
import {Redirect} from "react-router-dom"
import Cookies from 'js-cookie'
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';

import appbar from '../assests/appbar.png'
import LoginPage from '../Login/LoginPage'

import { Container } from '@material-ui/core';

const useStyles = theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appBar:{
    zIndex : -1,
  }
});



class Header extends React.Component{

  constructor(props){
    super(props);
    this.state={
      loggedOut:false
    }
  }
  userlogout = () => {
    
    Cookies.remove("name");
    Cookies.remove("role");
    this.setState(
      {
        loggedOut:true
      }
    )
  }
 render(){  
   const classes = this.props;
   if(this.state.loggedOut){
     return(
     <Redirect to = "/" />
     );
   }
    return(
              <div>
                  <AppBar position="fixed" className={classes.appBar}>
                  <GoogleLogout 
          className="google-logout-button"
          clientId="402744950664-cefekape7t5m71d9ok33fun1pg5hgdb7.apps.googleusercontent.com"
          buttonText="Logout"
          onLogoutSuccess={this.userlogout}
          onFailure={this.responseGoogle}
          isSignedIn={false}
                  cookiePolicy={"single_host_origin"} /> 
                 
                    <img src={appbar} style={{height:90}}></img>

          
      </AppBar>
                 
        
              </div>
      );
  }
}

export default withStyles(useStyles)(Header);
