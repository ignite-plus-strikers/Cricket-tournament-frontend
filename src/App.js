import React from 'react';
import './App.css';
import { Route, Link, BrowserRouter as Router, Switch,useLocation, BrowserRouter } from 'react-router-dom';

import Footer from './Footer/FooterComponent';
import MatchSelection from './Scorer/MatchSelection';
import PreMatch from './Scorer/PreMatch';
import AdminDashboard from './Admin/AdminDashboard';
import ListPlayersComponent from './Admin/Player/ListPlayersComponent'; 


import ShowPlayer from './Admin/Team/ShowPlayer';
import AddPlayer from './Admin/Team/AddPlayer';
import AddTeams from './Admin/Series/AddTeams';
import SeriesComponent from './Admin/Series/SeriesComponent';
import ShowTeams from './Admin/Series/ShowTeams';
import FixtureComponent from './Admin/Fixtures/FixtureComponent';
import TeamComponent from './Admin/Team/TeamComponent';
import BackgroundImage from './background_img/BackgroundImage';
import UmpireComponent from './Admin/Umpire/UmpireComponent';

import RefereeComponent from './Admin/Referee/RefereeComponent';

import LoginPage from './Login/LoginPage'
import ScoringScreen from './Scorer/ScoringScreen'
import {createMuiTheme , MuiThemeProvider} from '@material-ui/core/styles'

import { AutoComplete } from 'rsuite';
import './App.css'
import Header from './Scorer/Header'
import ScoreCard from './Scorer/ScoreCard'
import AdminList from './SiteAdmin/component/AdminList';
import ScorerList from './SiteAdmin/component/ScorerList';
import Home from './SiteAdmin/component/Home';

const theme = createMuiTheme({
  palette: {
      // primary: {
      //     main: '#00bcd4',
      // },
      // secondary: {
      //     main: '#a5d1e1',
      // },
      // text:{
      //   primary:'#00bcd4'
      // },
      spacing:1,
  },
});




function App() {

    const location = useLocation();
    
  return (
    <div className = "header-styling">

          {/*<MuiThemeProvider theme={theme}>*/}
          <Router>
        
        <Route exact path="/" component={LoginPage} />
        <Route path = "/siteadmin/admin" component={AdminList}/>
        <Route path = "/siteadmin/home" component={Home}/>
        <Route path = "/siteadmin/scorer" component={ScorerList}/>
        <Route exact path = "/admin/dashboard" component={AdminDashboard}/>
        <Route path="/scorer/PreMatch/:id" component={PreMatch} />
        <Route path = "/scorer/ScoringScreen/:id" component={ScoringScreen}/>
        <Route path = "/scorer/ScoreCard/:id" component={ScoreCard}/>
        <Route path = "/scorer/MatchSelection" component={MatchSelection} />
        <Route path="/admin/dashboard/PlayerDisplay" component={ListPlayersComponent} />
        <Route path="/admin/dashboard/FixtureDisplay" component={FixtureComponent} />
        <Route path="/admin/dashboard/TeamDisplay" component={TeamComponent} />
        <Route path="/admin/dashboard/TeamShowPlayer/:id" component={ShowPlayer} />
        <Route path="/admin/dashboard/TeamAddPlayer/:id" component={AddPlayer} />
        <Route path="/admin/dashboard/SeriesAddTeam/:id" component={AddTeams} />
        <Route path="/admin/dashboard/SeriesShowTeam/:id" component={ShowTeams} />
        <Route path="/admin/dashboard/SeriesDisplay" component={SeriesComponent} />
        <Route exact path="/admin/dashboard/UmpireDisplay" component={UmpireComponent} />
        <Route exact path="/admin/dashboard/RefereeDisplay" component={RefereeComponent} />
        <Route exact path="/home" component={BackgroundImage} />
      
        </Router>
        {/*</MuiThemeProvider> */}
       
    </div>
    
  );
}


export default App;