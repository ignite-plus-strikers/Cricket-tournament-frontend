import React from 'react';
import {Link,Route,Switch,Router} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SportsCricketIcon from '@material-ui/icons/SportsCricket';
import AdminDashboard from '../Admin/AdminDashboard';
import ListPlayersComponent from '../Admin/Player/ListPlayersComponent'; 
import PlayerAddnUpdate from '../Admin/Player/PlayerAddnUpdate';
import AddForm from '../Admin/Player/AddForm';
import FixturesForm from '../Admin/Fixtures/FixturesForm';
import TeamForm from '../Admin/Team/TeamForm';
import SeriesForm from '../Admin/Series/SeriesForm';
import ShowPlayer from '../Admin/Team/ShowPlayer';
import AddPlayer from '../Admin/Team/AddPlayer';
import AddTeams from '../Admin/Series/AddTeams';
import SeriesComponent from '../Admin/Series/SeriesComponent';
import ShowTeams from '../Admin/Series/ShowTeams';
import FixtureComponent from '../Admin/Fixtures/FixtureComponent';
import TeamComponent from '../Admin/Team/TeamComponent';
import TeamUpdate from '../Admin/Team/TeamUpdate';
import SeriesUpdate from '../Admin/Series/SeriesUpdate';
import UmpireComponent from '../Admin/Umpire/UmpireComponent';
import UmpireForm from '../Admin/Umpire/UmpireForm';
import UmpireUpdate from '../Admin/Umpire/UmpireUpdate';
import RefereeComponent from '../Admin/Referee/RefereeComponent';
import RefereeUpdate from '../Admin/Referee/RefereeUpdate';
import RefereeForm from '../Admin/Referee/RefereeForm';
import FixtureUpdate from '../Admin/Fixtures/FixtureUpdate';
import FixturesFormNew from '../Admin/Fixtures/FixturesFormNew';
import appbar from '../Admin/cards_images/appbar.png';

const drawerWidth = 180;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  link:{
    textDecoration:'none',
    color:theme.palette.text.primary
  },   
  
}));

export default function SideNav() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
         <img src={appbar} className="SideNav"></img>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
        <List>
        <Link to ="/" className = {classes.link}>
          <ListItem button>
            <ListItemIcon><DashboardIcon /></ListItemIcon>
            <ListItemText style={{color:'#1565c0'}}>Dashboard</ListItemText>
          </ListItem>
        </Link>
        <Divider />
        <Link to ="/admin/dashboard/PlayerDisplay" className = {classes.link}>
          <ListItem button>
            <ListItemIcon><SportsCricketIcon /></ListItemIcon>
            <ListItemText style={{color:'#1565c0'}}>Player Master</ListItemText>
          </ListItem>
        </Link>
        <Link to ="/admin/dashboard/TeamDisplay" className = {classes.link}>
          <ListItem button>
            <ListItemIcon><SportsCricketIcon /></ListItemIcon>
            <ListItemText style={{color:'#1565c0'}}>Teams Master</ListItemText>
          </ListItem>
        </Link>
        <Link to ="/admin/dashboard/SeriesDisplay" className = {classes.link}>
          <ListItem button>
            <ListItemIcon><SportsCricketIcon /></ListItemIcon>
            <ListItemText style={{color:'#1565c0'}}>Series Master</ListItemText>
          </ListItem>
        </Link>
        <Link to ="/admin/dashboard/FixtureDisplay" className = {classes.link}>
          <ListItem button>
            <ListItemIcon><SportsCricketIcon /></ListItemIcon>
            <ListItemText style={{color:'#1565c0'}}>Fixtures Master</ListItemText>
          </ListItem>
        </Link>
        <Link to ="/admin/dashboard/UmpireDisplay" className = {classes.link}>
          <ListItem button>
            <ListItemIcon><SportsCricketIcon /></ListItemIcon>
            <ListItemText style={{color:'#1565c0'}}>Umpires Master</ListItemText>
          </ListItem>
        </Link>
        <Link to ="/admin/dashboard/RefereeDisplay" className = {classes.link}>
          <ListItem button>
            <ListItemIcon><SportsCricketIcon /></ListItemIcon>
            <ListItemText style={{color:'#1565c0'}}>Referee Master</ListItemText>
          </ListItem>
        </Link>
     </List>

        </div>
      </Drawer>
      <main className={classes.content}>
      <Switch>
          
        <Route exact path="/admin/dashboard" component={AdminDashboard} />
        <Route exact path="/admin/dashboard/PlayerDisplay" component={ListPlayersComponent} />
        <Route path="/admin/dashboard/Player/:id" component={PlayerAddnUpdate} />
        <Route path="/admin/dashboard/PlayerAddForm" component={AddForm} />
        <Route path="/admin/dashboard/FixtureAddForm" component={FixturesForm} />
        <Route path="/admin/dashboard/FixtureDisplay" component={FixtureComponent} />
        <Route path="/admin/dashboard/Fixture/:id" component={FixtureUpdate} />
        <Route path="/admin/dashboard/Team/:id" component={TeamUpdate} />
        <Route path="/admin/dashboard/TeamAddForm" component={TeamForm} />
        <Route path="/admin/dashboard/TeamDisplay" component={TeamComponent} />
        <Route path="/admin/dashboard/TeamShowPlayer/:id" component={ShowPlayer} />
        <Route path="/admin/dashboard/TeamAddPlayer/:id" component={AddPlayer} />
        <Route path="/admin/dashboard/SeriesAddTeam/:id" component={AddTeams} />
        <Route path="/admin/dashboard/SeriesShowTeam/:id" component={ShowTeams} />
        <Route path="/admin/dashboard/SeriesAddForm" component={SeriesForm} />
        <Route path="/admin/dashboard/SeriesDisplay" component={SeriesComponent} />
        <Route path="/admin/dashboard/Series/:id" component={SeriesUpdate} />
        <Route path="/admin/dashboard/UmpireDisplay" component={UmpireComponent} />
        <Route path="/admin/dashboard/Umpire/:id" component={UmpireUpdate} /> 
        <Route path="/admin/dashboard/UmpireAddForm" component={UmpireForm} />
        <Route path="/admin/dashboard/RefereeDisplay" component={RefereeComponent} />
        <Route path="/admin/dashboard/Referee/:id" component={RefereeUpdate} /> 
        <Route path="/admin/dashboard/RefereeAddForm" component={RefereeForm} />
       </Switch> 
      
      </main>
    </div>
  );
}
