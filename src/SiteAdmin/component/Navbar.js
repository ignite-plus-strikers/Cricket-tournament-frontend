import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
 
};

class Navbar extends React.Component {
  render(){
  const { classes } = this.props;
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ marginTop: 0 }}>
        <Toolbar  style={{ marginTop: 0}}>
          <Button style={{ marginRight: 50 }} color="inherit" aria-labelledby="Home" href = '/siteadmin/home'>Home</Button>
          <Button style={{ marginRight: 50 }} color="inherit" aria-labelledby="admins" href = '/siteadmin/admin'>Admins</Button>
          <Button style={{ marginRight: 50 }} color="inherit" aria-labelledby="Scorers" href = '/siteadmin/scorer'>Scorers</Button>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}
}
Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);