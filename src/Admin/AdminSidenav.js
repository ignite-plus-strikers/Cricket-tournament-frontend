import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link} from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {  MenuList, MenuItem } from '@material-ui/core';

import routes from './routes';


const styles =theme=>( {
    root: {
        display: 'flex',
        position:"fixed",
        zIndex:5
        
      },
      
      drawer: {
        width: 250,
        color:"#083f91",
        position:"fixed"
      },
      drawerPaper: {
        width: 250,
        marginTop:"100px",
        position:"fixed",
        paddingTop:"20px"
        
      },
      content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
      },
      toolbar: theme.mixins.toolbar,
      link:{
        color:'#1854af',
       
      },
      listItemText : {
        fontSize : "20px"
      }
    });
    
  

class AdminSidenav extends React.Component{
    constructor(props) {
        super(props);
    
        this.activeRoute = this.activeRoute.bind(this);
      }
    
      activeRoute(routeName) {
        return window.location.pathname===routeName ? true : false;
      }
    render(){
        const { classes } =this.props;  
        return(
            <div className={classes.root}>
                
             <Drawer
                style={{position:"fixed"}}
                className={classes.drawer}
                variant="permanent"
                classes={{
                paper: classes.drawerPaper,
                }}
            >
                            
                    <MenuList>
            {routes.map((prop, key) => {
              return (
                <Link to={prop.path} className={classes.link} key={key}>
                  <MenuItem selected={this.activeRoute(prop.path)}>
                    <ListItemIcon>
                      <prop.icon />
                    </ListItemIcon>
                    <ListItemText primary={prop.sidebarName} classes={{primary:classes.listItemText}}/>
                  </MenuItem>
                </Link>
              );
            })}
          </MenuList>
       
                </Drawer>
               
            </div>
          );
      }
}
AdminSidenav.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AdminSidenav);
