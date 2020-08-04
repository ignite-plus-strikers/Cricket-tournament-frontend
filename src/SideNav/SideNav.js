import React from 'react';
import {BrowserRouter as Router,Link,Route,Switch} from 'react-router-dom'
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SportsCricketIcon from '@material-ui/icons/SportsCricket'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Sidenav } from 'rsuite';
import AdminDashboard from '../Admin/AdminDashboard';
import ListPlayersComponent from '../Admin/Player/ListPlayersComponent';
import TeamComponent from '../Admin/Team/TeamComponent';
import FixtureComponent from '../Admin/Fixtures/FixtureComponent';
import UmpireComponent from '../Admin/Umpire/UmpireComponent';
import RefereeComponent from '../Admin/Referee/RefereeComponent';
import SeriesComponent from '../Admin/Series/SeriesComponent';
import appbar from '../Admin/cards_images/appbar.png';


const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  link:{
    textDecoration:'none',
    color:theme.palette.text.primary
  },
  toolbarButtons: {
    marginLeft: 'auto',
  },
}));

function SideNav(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <List>
        <Link to ="/admin/dashboard" className = {classes.link}>
          <ListItem button>
            <ListItemIcon><DashboardIcon /></ListItemIcon>
            <ListItemText primary = {"Dashboard"}></ListItemText>
          </ListItem>
        </Link>
        <Divider />
        <Link to ="/admin/dashboard/PlayerDisplay" className = {classes.link}>
          <ListItem button>
            <ListItemIcon><SportsCricketIcon /></ListItemIcon>
            <ListItemText primary = {"Player Master"}></ListItemText>
          </ListItem>
        </Link>
        <Link to ="/admin/dashboard/TeamDisplay" className = {classes.link}>
          <ListItem button>
            <ListItemIcon><SportsCricketIcon /></ListItemIcon>
            <ListItemText primary = {"Teams Master"}></ListItemText>
          </ListItem>
        </Link>
        <Link to ="/admin/dashboard/SeriesDisplay" className = {classes.link}>
          <ListItem button>
            <ListItemIcon><SportsCricketIcon /></ListItemIcon>
            <ListItemText primary = {"Series Master"}></ListItemText>
          </ListItem>
        </Link>
        <Link to ="/admin/dashboard/FixtureDisplay" className = {classes.link}>
          <ListItem button>
            <ListItemIcon><SportsCricketIcon /></ListItemIcon>
            <ListItemText primary = {"Fixtures Master"}></ListItemText>
          </ListItem>
        </Link>
        <Link to ="/admin/dashboard/UmpireDisplay" className = {classes.link}>
          <ListItem button>
            <ListItemIcon><SportsCricketIcon /></ListItemIcon>
            <ListItemText primary = {"Umpire Master"}></ListItemText>
          </ListItem>
        </Link>
        <Link to ="/admin/dashboard/RefereeDisplay" className = {classes.link}>
          <ListItem button>
            <ListItemIcon><SportsCricketIcon /></ListItemIcon>
            <ListItemText primary = {"Referee Master"}></ListItemText>
          </ListItem>
        </Link>
     </List>

    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar} image={appbar}>
        <Toolbar className={classes.toolbar} image={appbar}>
          <img src="src/Admin/cards_images/appbar.png"></img>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Strikers
          </Typography>
          <div className={classes.toolbarButtons}>
          <Button variant="contained" color="primary" position="absolute" startIcon={<AccountCircleIcon />}> Logout</Button>
          </div>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
       
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
          </Drawer>
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open>
              {drawer}
          </Drawer>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          <Route exact path = "/admin/dashboard" component={AdminDashboard}></Route>
          <Route path = "/admin/dashboard/PlayerDisplay" component={ListPlayersComponent}></Route>
          <Route path = "/admin/dashboard/TeamDisplay" component={TeamComponent}></Route>
          <Route path="/admin/dashboard/SeriesDisplay" component={SeriesComponent}></Route>
          <Route path = "/admin/dashboard/FixtureDisplay" component={FixtureComponent}></Route>
          <Route path = "/admin/dashboard/UmpireDisplay" component={UmpireComponent}></Route>
          <Route path = "/admin/dashboard/RefereeDisplay" component={RefereeComponent}></Route>
       </Switch>    
      </main>
    </div>
  );
}

SideNav.propTypes = {
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  container: PropTypes.object,
};
export default SideNav;
