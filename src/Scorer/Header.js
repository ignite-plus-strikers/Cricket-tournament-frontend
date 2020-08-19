import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
//import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import appbar from '../assests/appbar.png'
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
 render(){  
    return(
              <div>
              {/*<Button variant="contained" color="primary" style={{marginTop:"2%", backgroundColor: '#0D5C75', position:"absolute",marginLeft:"90%"}}> Logout</Button>*/}
                  <img className="header_img" src={appbar} alt="header" style={{height : 110}}  ></img>
                 
              </div>
      );
  }
}

export default withStyles(useStyles)(Header);
