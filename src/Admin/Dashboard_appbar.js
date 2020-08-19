import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  root: {
    flexGrow: 1,
    zIndex:1400
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class Dashboard_appbar extends React.Component{
    render(){
        const { classes } =this.props;  
        return(
            <div className={classes.root}>
            <AppBar position="static">
              <Toolbar>
            
                <Typography variant="h6" color="inherit" className={classes.grow}>
                  Dashboard
                </Typography>
                <Button color="inherit">Log Out</Button>
              </Toolbar>
            </AppBar>
          </div>
          );
      }
}
Dashboard_appbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard_appbar);
