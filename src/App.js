import React from 'react';
import './App.css';
import { Route, Link, BrowserRouter as Router, Switch,useLocation } from 'react-router-dom';
import Footer from './Footer/FooterComponent';
import MatchSelection from './Scorer/MatchSelection';
import PreMatch from './Scorer/PreMatch';
import AdminDashboard from './Admin/AdminDashboard';
import ListPlayersComponent from './Admin/Player/ListPlayersComponent'; 
import PlayerAddnUpdate from './Admin/Player/PlayerAddnUpdate';
import AddForm from './Admin/Player/AddForm';
import FixturesForm from './Admin/Fixtures/FixturesForm';
import TeamForm from './Admin/Team/TeamForm';
import SeriesForm from './Admin/Series/SeriesForm';
import ShowPlayer from './Admin/Team/ShowPlayer';
import AddPlayer from './Admin/Team/AddPlayer';
import AddTeams from './Admin/Series/AddTeams';
import SeriesComponent from './Admin/Series/SeriesComponent';
import ShowTeams from './Admin/Series/ShowTeams';
import FixtureComponent from './Admin/Fixtures/FixtureComponent';
import TeamComponent from './Admin/Team/TeamComponent';
import TeamUpdate from './Admin/Team/TeamUpdate';
import SeriesUpdate from './Admin/Series/SeriesUpdate';
import BackgroundImage from './background_img/BackgroundImage';
import UmpireComponent from './Admin/Umpire/UmpireComponent';
import UmpireForm from './Admin/Umpire/UmpireForm';
import UmpireUpdate from './Admin/Umpire/UmpireUpdate';
import RefereeComponent from './Admin/Referee/RefereeComponent';
import RefereeUpdate from './Admin/Referee/RefereeUpdate';
import RefereeForm from './Admin/Referee/RefereeForm';
import FixtureUpdate from './Admin/Fixtures/FixtureUpdate';
import FixturesFormNew from './Admin/Fixtures/FixturesFormNew';
import LoginPage from './Login/LoginPage'
import ScoringScreen from './Scorer/ScoringScreen'
import {createMuiTheme , MuiThemeProvider} from '@material-ui/core/styles'
import SideNav from './SideNav/SideNav';
import { AutoComplete } from 'rsuite';
import './App.css'
import Header from './Scorer/Header'
import ScoreCard from './Scorer/ScoreCard'

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
          {/*{
            location.pathname != "/" && <SideNav />

          }*/}

          {/*<MuiThemeProvider theme={theme}>*/}
          <Router>
          <Header style={{marginTop : 0,zIndex:1400}}/>
        <Route exact path="/" component={LoginPage} />
       
        <Route exact path="/admin/dashboard" component={AdminDashboard} />
        <Route exact path="/scorer/MatchSelection" component={MatchSelection} />
        <Route path="/scorer/PreMatch/:id" component={PreMatch} />
        <Route path = "/scorer/ScoringScreen/:id" component={ScoringScreen}/>
        <Route path = "/scorer/ScoreCard/:id" component={ScoreCard}/>
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
        <Route exact path="/admin/dashboard/UmpireDisplay" component={UmpireComponent} />
        <Route path="/admin/dashboard/Umpire/:id" component={UmpireUpdate} /> 
        <Route path="/admin/dashboard/UmpireAddForm" component={UmpireForm} />
        <Route exact path="/admin/dashboard/RefereeDisplay" component={RefereeComponent} />
        <Route path="/admin/dashboard/Referee/:id" component={RefereeUpdate} /> 
        <Route path="/admin/dashboard/RefereeAddForm" component={RefereeForm} />
        <Route exact path="/home" component={BackgroundImage} />
        <Route exact path="/test" component={FixturesFormNew} />
        </Router>
        {/*</MuiThemeProvider> */}
        
    </div>
    
  );
}


export default App;