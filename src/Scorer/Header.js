import React from 'react';
import { GoogleLogout } from "react-google-login";
import Cookies from 'js-cookie'
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
//import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
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
});



class Header extends React.Component{

  userlogout = () => {
    Cookies.remove("name");
    Cookies.remove("role");
    return <LoginPage />
  }
 render(){  
    return(
              <div>
                <GoogleLogout 
          className="google-logout-button"
          clientId="402744950664-cefekape7t5m71d9ok33fun1pg5hgdb7.apps.googleusercontent.com"
          buttonText="Logout"
          onLogoutSuccess={this.userlogout}
          onFailure={this.responseGoogle}
          isSignedIn={false}
          cookiePolicy={"single_host_origin"} />
                  <img className="header_img" src={appbar} alt="header"  ></img>
                  
        
              </div>
      );
  }
}

export default withStyles(useStyles)(Header);
