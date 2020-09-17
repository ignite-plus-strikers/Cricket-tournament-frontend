import React from 'react';
import './App.css';
import { Route,BrowserRouter as Router,useLocation} from 'react-router-dom';


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
import UmpireComponent from './Admin/Umpire/UmpireComponent';
import RefereeComponent from './Admin/Referee/RefereeComponent';
import LoginPage from './Login/LoginPage'
import ScoringScreen from './Scorer/ScoringScreen'
import './App.css'
import ScoreCard from './Scorer/ScoreCard'
import AdminList from './SiteAdmin/component/AdminList';
import ScorerList from './SiteAdmin/component/ScorerList';
import Home from './SiteAdmin/component/Home';

function App() {  
  return (
    <div className = "header-styling"> 
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
      
        </Router>
       
       
    </div>
    
  );
}


export default App;